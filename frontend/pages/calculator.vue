<template>
  <v-card title="Kalkulator Walut na PLN" flat>
    <v-text-field
      v-model="amount"
      label="Kwota"
      type="number"
      min="0"
      step="0.01"
      required
      @input="calculate"
    ></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      item-title="name"
      item-value="rate"
      label="Wybierz walutę źródłową"
      return-object
      single-line
      @change="calculate"
    ></v-select>

    <v-card v-if="result !== null" class="mt-4">
      <v-card-title>Wynik</v-card-title>
      <v-card-subtitle>
        {{ amount }} {{ select.name }} = {{ result }} PLN
      </v-card-subtitle>
    </v-card>
  </v-card>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';

const amount = ref(0);
const select = ref(null);
const result = ref(null);
const items = ref([]);

const fetchCurrencies = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/currencies');
    items.value = response.data.map(currency => ({
      name: currency.name,
      rate: currency.rate
    }));

    if (items.value.length > 0) {
      select.value = items.value[0];
    }
  } catch (error) {
    console.error('Error fetching currencies:', error);
  }
};

const calculate = () => {
  if (amount.value && select.value) {
    result.value = amount.value * select.value.rate;
  } else {
    result.value = null;
  }
};

onMounted(() => {
  fetchCurrencies();
});

watch([amount, select], calculate);
</script>
