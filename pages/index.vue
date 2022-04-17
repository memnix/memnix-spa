<template>
  <v-container justify="center" align="center">
    <v-container mt-10>
      <h1 class="text-center mb-12">{{ $t('welcome_index') }}</h1>
    </v-container>
    <v-card color="surface" class="mb-12 elevation-10">
      <v-card-title>Contribute</v-card-title>
      <v-card-text>
        <p>
          {{ $t('presentation_index') }}
        </p>
        <p>
          {{ $t('more_info_index') }}
          <a
            href="https://github.com/memnix"
            target="_blank"
            rel="noopener noreferrer"
          >
            github</a
          >.
        </p>

        <p>
          {{ $t('thx_index') }}
        </p>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn x-large color="secondary" nuxt :to="localePath('/today')">
          {{ $t('getting_started') }}
        </v-btn>
      </v-card-actions>
    </v-card>

    <v-card color="surface" class="elevation-10">

      <v-card-title>Learn</v-card-title>
      <v-card-text>
        <p>
          {{ $t('presentation_index') }}
        </p>
        <p>
          {{ $t('more_info_index') }}
          <a
            href="https://github.com/memnix"
            target="_blank"
            rel="noopener noreferrer"
          >
            github</a
          >.
        </p>

        <p>
          {{ $t('thx_index') }}
        </p>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn x-large color="secondary" nuxt :to="localePath('/today')">
          Jump right in
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'landing',
  middleware: 'guest',
})
</script>
