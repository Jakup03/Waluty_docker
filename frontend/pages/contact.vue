<template>
  <div class="contact-page">
    <h1>Kontakt</h1>

    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-form @submit.prevent="submitForm">
            <v-text-field
              v-model="form.name"
              label="Imię i nazwisko"
              required
            ></v-text-field>

            <v-text-field
              v-model="form.email"
              label="Email"
              type="email"
              required
            ></v-text-field>

            <v-textarea
              v-model="form.message"
              label="Wiadomość"
              rows="5"
              required
            ></v-textarea>

            <v-btn type="submit" color="primary">Wyślij</v-btn>
          </v-form>
        </v-col>

        <v-col cols="12" md="6">
          <div class="contact-info">
            <h2>Dane kontaktowe</h2>
            <p><strong>Adres:</strong> 1234 Ulica, Miasto, Kraj</p>
            <p><strong>Telefon:</strong> +48 123 456 789</p>
            <p><strong>Email:</strong> kontakt@example.com</p>
          </div>

          <v-card class="mt-4">
            <v-card-title>Znajdź nas na mapie</v-card-title>
            <v-card-subtitle>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.73357210677!2d-73.935242!3d40.730610!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af493201df%3A0x7c065f74d21e2ae6!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1630670957385!5m2!1sen!2sin"
                width="100%"
                height="250"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  message: '',
});

const submitForm = () => {
  console.log('Form submitted:', form.value);
};
</script>

<style scoped>
.contact-page {
  padding: 20px;
}

.contact-info {
  margin-top: 20px;
}

.contact-info p {
  margin: 5px 0;
}
</style>
