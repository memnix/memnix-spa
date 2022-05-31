<template>
  <v-card color="background">
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      shaped
      elevation="24"
      outlined
      color="warning"
    >
      {{ snackbarText }}

      <template #action="{ attrs }">
        <v-btn color="warning" icon v-bind="attrs" @click="snackbar = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
    <v-tabs background-color="background">
      <v-tab>
        <v-icon left> mdi-cog </v-icon>
        Public Decks
      </v-tab>
      <v-tab>
        <v-icon left> mdi-cards </v-icon>
        Secret Code
      </v-tab>

      <v-tab-item transition="false">
        <v-card color="background">
          <v-card-text>
            <v-form @submit.prevent="validateAnswer">
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="deckSecret"
                    maxlength="11"
                    color="primary"
                    outlined
                    shaped
                    counter
                    :label="$t('secret_code')"
                    background-color="surface"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="onbackground" text @click="closeDialog">
              {{ $t('close') }}
            </v-btn>
            <v-btn color="primary" text x-large @click="validateAnswer">
              {{ $t('ok') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-tab-item>
      <v-tab-item transition="false">
        <v-card color="background">
        <v-card-text>
          <v-form @submit.prevent="validateAnswer">
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="deckSecret"
                  maxlength="11"
                  color="primary"
                  outlined
                  shaped
                  counter
                  :label="$t('secret_code')"
                  background-color="surface"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="onbackground" text @click="closeDialog">
            {{ $t('close') }}
          </v-btn>
          <v-btn color="primary" text x-large @click="validateAnswer">
            {{ $t('ok') }}
          </v-btn>
        </v-card-actions>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>

</template>

<script lang="ts">
import { subscribePrivateDeckAPI } from '~/api/deck.api'

export default {
  name: 'PrivateDeckDialog',

  props: {},
  data(): {
    deckSecret: string
    snackbar: boolean
    snackbarText: string
    timeout: number
  } {
    return {
      deckSecret: '',
      snackbar: false,
      snackbarText: '',
      timeout: 2000,
    }
  },
  methods: {
    validateAnswer() {
      if (this.deckSecret.includes('#')) {
        this.subscribeToPrivateDeck(this.deckSecret.replace('#', '/'))
      } else {
        this.snackbarText = this.$i18n.t('not_valid_code')
        this.snackbar = true
      }
    },
    async subscribeToPrivateDeck(secret: string) {
      const [error] = await subscribePrivateDeckAPI(secret)
      if (error) {
        this.error = error.response.data.message
        this.snackbarText = this.$i18n.t('not_valid_code')
        this.snackbar = true
      } else {
        this.subscribeDeckOk()
      }
    },
    subscribeDeckOk() {
      this.$emit('subscribeDeckOk')
    },

    closeDialog() {
      this.$emit('closePrivateSubscribe')
    },
  },
}
</script>

<style scoped></style>
