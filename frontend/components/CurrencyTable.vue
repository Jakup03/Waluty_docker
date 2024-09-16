<template>
  <v-card title="Kursy Walut" flat>
    <v-typography variant="body-small" class="description">
      bieżące kursy średnie walut obcych w złotych określonych w § 2 pkt 1 i 2 uchwały Nr 51/2002 Zarządu Narodowego Banku Polskiego z dnia 23 września 2002 r. w sprawie sposobu wyliczania i ogłaszania bieżących kursów walut obcych (Dz. Urz. NBP z 2023 r. poz. 1):
    </v-typography>
    
    <v-text-field
      v-model="search"
      label="Search"
      prepend-inner-icon="mdi-magnify"
      variant="outlined"
      hide-details
      single-line
    ></v-text-field>

    <v-btn @click="showDialog = true" color="primary" class="mt-4">
      Dodaj Walutę
    </v-btn>


    <v-data-table
      :headers="headers"
      :items="currencies"
      :search="search"
    >
    </v-data-table>

    <v-dialog v-model="showDialog" max-width="600px">
      <v-card>
        <v-card-title>
          Dodaj Nową Walutę
        </v-card-title>
        <v-card-text>
          <v-form @submit.prevent="addCurrency">
            <v-text-field
              v-model="newCurrency.name"
              label="Nazwa Waluty"
              required
            ></v-text-field>
            <v-text-field
              v-model="newCurrency.symbol"
              label="Symbol Waluty"
              required
            ></v-text-field>
            <v-text-field
              v-model="newCurrency.rate"
              label="Kurs"
              type="number"
              required
            ></v-text-field>
            <v-btn type="submit" color="primary">Dodaj</v-btn>
            <v-btn @click="showDialog = false" text>Anuluj</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const search = ref('');
const showDialog = ref(false);
const newCurrency = ref({
  name: '',
  symbol: '',
  rate: 0,
});
const headers = [
  { text: 'Nazwa', value: 'name' },
  { text: 'Symbol', value: 'symbol' },
  { text: 'Kurs', value: 'rate' },
  { text: 'Akcje', value: 'actions', sortable: false },
];
const currencies = ref([]);

const fetchCurrencies = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/currencies');
    currencies.value = response.data;
  } catch (error) {
    console.error('Error fetching currencies:', error);
  }
};

const addCurrency = async () => {
  try {
    const response = await axios.post('http://localhost:3001/api/currencies', newCurrency.value);
    currencies.value.push(response.data);
    showDialog.value = false;
    newCurrency.value = { name: '', symbol: '', rate: 0 };
  } catch (error) {
    console.error('Error adding currency:', error);
  }
};


fetchCurrencies();
</script>

<style scoped>
.v-card {
  padding: 16px;
}

.description {
  font-size: 0.8rem;
  color: #666;
  margin-bottom: 16px;
}
</style>
