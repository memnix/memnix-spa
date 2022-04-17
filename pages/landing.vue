<template>
  <v-container fluid>
    <v-row >
      <v-col cols="12">
        <h1 class="text-center mb-12">{{ $t('welcome_index') }}</h1>
      </v-col>
      <v-col cols="6">
        <v-hover v-slot=" { hover }">
          <v-card
            outlined
            :elevation="hover ? 16: 2"
            :class="{ 'on-hover': hover }"
            :color="hover ? 'surfacevariant': 'surface'"
            height="100%"
          >
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
        </v-hover>
      </v-col>
      <v-col cols="6">
        <v-hover v-slot=" { hover }">

        <v-card
          outlined
          :color="hover ? 'surfacevariant': 'surface'"
          :class="{ 'on-hover': hover }"
          :elevation="hover ? 16: 2"
          height="100%">
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
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'landing',
  middleware: 'guest',
})
</script>
