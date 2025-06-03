<template>
  <a class="position-fixed top-50 bg-light text-dark fw-medium border rounded-pill shadow text-decoration-none" @click="toggleCustomizer" style="right: -1.75rem; margin-top: -1rem; padding: 0.25rem 0.75rem; transform: rotate(-90deg); font-size: calc(var(--ar-body-font-size) * 0.8125); letter-spacing: 0.075rem; z-index: 1029; cursor: pointer">
    <i class="ai-settings text-primary fs-base me-1 ms-n1"></i>
    Customize
  </a>

  <b-offcanvas v-model="isCustomizerOpen" placement="end" :backdrop="false" header-class="border-bottom" :body-scrolling="true">
    <template v-slot:title>
      <h4 class="offcanvas-title">Customize theme</h4>
    </template>

    <div class="d-flex align-items-center mb-3">
      <i class="ai-paint-roll text-body-secondary fs-4 me-2"></i>
      <h5 class="mb-0">Colors</h5>
    </div>

    <b-row class="row-cols-3 g-3 mb-5" id="theme-colors">
      <div v-for="color in colors" class="col" :key="color.hex">
        <div class="text-dark fs-sm fw-medium mb-2">{{ color.name }}</div>
        <div class="color-swatch" :id="'theme-' + color.variant" data-color-labels='["theme-{{color.variant}}", "{{color.variant}}", "{{color.variant}}-rgb"]'>
          <label class="ratio ratio-4x3 border rounded-1 cursor-pointer mb-1" :for="color.variant" :style="{ backgroundColor: customizerConfig[color.variant] }" role="button"></label>
          <input class="form-control form-control-sm" maxlength="7" :name="color.variant" type="text" @input="onChange" v-model="customizerConfig[color.variant]" />
          <input class="visually-hidden" maxlength="7" type="color" :id="color.variant" :name="color.variant" @input="onChange" v-model="customizerConfig[color.variant]" />
        </div>
      </div>
    </b-row>
    <div class="d-flex align-items-center mb-3">
      <i class="ai-align-left text-body-secondary fs-4 me-2"></i>
      <h5 class="mb-0">Typography <span class="text-body-secondary fs-sm fw-normal">(1rem = 16px)</span></h5>
    </div>

    <div class="mb-5">
      <div class="mb-3">
        <label class="text-dark fs-sm fw-medium pt-1 mb-2" for="font-url">Google font URL</label>
        <input class="form-control" type="url" name="url" @input="onChange" v-model="customizerConfig.url" id="font-url" />
      </div>
      <div class="mb-3">
        <label class="text-dark fs-sm fw-medium pt-1 mb-2" for="body-font-family">Font family</label>
        <input class="form-control" type="text" name="fontFamily" @input="onChange" v-model="customizerConfig.fontFamily" id="body-font-family" />
      </div>
      <b-row class="row-cols-2">
        <b-col class="mb-3">
          <label class="d-flex w-100 text-dark fs-sm fw-medium pt-1 mb-2" for="root-font-size">Root font size, rem</label>
          <select class="form-select" name="rootFontSize" id="root-font-size" v-model="customizerConfig.rootFontSize" @change="onChange">
            <option v-for="size in rootFontSizes" :key="size" :value="size" :selected="size === customizerConfig.rootFontSize">{{ size }}</option>
          </select>
        </b-col>
        <b-col class="mb-3">
          <label class="d-flex w-100 text-dark fs-sm fw-medium pt-1 mb-2" for="body-font-size">Body font size, rem</label>
          <select class="form-select" name="bodyFontSize" id="body-font-size" v-model="customizerConfig.bodyFontSize" @change="onChange">
            <option v-for="size in bodyFontSizes" :key="size" :value="size" :selected="size === customizerConfig.bodyFontSize">{{ size }}</option>
          </select>
        </b-col>
      </b-row>
    </div>
    <div class="d-flex align-items-center mt-n2 mb-3">
      <i class="ai-maximize text-body-secondary fs-5 me-2"></i>
      <h5 class="mb-0">Borders / Rounding</h5>
    </div>

    <div class="mb-3">
      <label class="d-flex w-100 text-dark fs-sm fw-medium pt-1 mb-2" for="border-width">Border width, px</label>
      <input class="form-control" type="number" min="0" step="1" name="borderWidth" @input="onChange" v-model="customizerConfig.borderWidth" id="border-width" />
    </div>
    <div class="mb-3">
      <label class="d-flex w-100 text-dark fs-sm fw-medium pt-1 mb-2" for="border-radius">Rounded base, rem</label>
      <input class="form-control" type="number" min="0" step=".05" name="roundedBase" @input="onChange" v-model="customizerConfig.roundedBase" id="border-radius" />
    </div>
    <div id="theme-border-radiuses">
      <div class="mb-3">
        <label class="d-flex w-100 text-dark fs-sm fw-medium pt-1 mb-2" for="border-radius-sm"> Rounded SM<span class="text-body-secondary fw-normal ms-1"> = Rounded base multiplied by</span></label>
        <input class="form-control" type="number" min="0" step=".05" name="roundedSm" @input="onChange" v-model="customizerConfig.roundedSm" id="border-radius-sm" />
      </div>
      <div class="mb-3">
        <label class="d-flex w-100 text-dark fs-sm fw-medium pt-1 mb-2" for="border-radius-lg"> Rounded LG<span class="text-body-secondary fw-normal ms-1"> = Rounded base multiplied by</span></label>
        <input class="form-control" type="number" min="0" step=".05" name="roundedLg" @input="onChange" v-model="customizerConfig.roundedLg" id="border-radius-lg" />
      </div>
      <div class="mb-3">
        <label class="d-flex w-100 text-dark fs-sm fw-medium pt-1 mb-2" for="border-radius-xl"> Rounded XL<span class="text-body-secondary fw-normal ms-1"> = Rounded base multiplied by</span></label>
        <input class="form-control" type="number" min="0" step=".05" name="roundedXl" @input="onChange" v-model="customizerConfig.roundedXl" id="border-radius-xl" />
      </div>
      <div class="mb-3">
        <label class="d-flex w-100 text-dark fs-sm fw-medium pt-1 mb-2" for="border-radius-xxl"> Rounded 2XL<span class="text-body-secondary fw-normal ms-1"> = Rounded base multiplied by</span></label>
        <input class="form-control" type="number" min="0" step=".05" name="roundedXxl" @input="onChange" v-model="customizerConfig.roundedXxl" id="border-radius-xxl" />
      </div>
    </div>

    <template v-slot:footer v-if="isThemeCustomized">
      <div class="offcanvas-header border-top" id="customizer-btns">
        <button class="btn btn-secondary w-100 me-3" type="button" id="customizer-reset-btn" @click="resetConfig">
          <i class="ai-undo fs-lg me-2 ms-n1"></i>
          Reset
        </button>
        <b-button variant="primary" class="w-100" data-bs-toggle="modal" @click="toggleModal">
          <i class="ai-code-curly fs-lg me-2 ms-n1"></i>
          Show styles
        </b-button>
      </div>
    </template>
  </b-offcanvas>

  <b-modal v-model="isModalOpen" class="fade" id="customizer-modal" tabindex="-1" size="lg" aria-modal="true" title="Your custom styles" title-tag="h4" hide-footer body-class="py-0">
    <div class="py-4">
      <p class="mb-3">Grab the generated styles below. Wrap them inside <code>&lt;style&gt;</code> tag and put in the <code>&lt;head&gt;</code> section of your HTML document.</p>
      <p class="mb-4"><span class="fw-medium">IMPORTANT:</span> In order for these styles to take effect you have to placed them below:<br /><code>&lt;link rel="stylesheet" media="screen" href="assets/css/theme.min.css"&gt;</code></p>
      <div class="bg-secondary overflow-hidden rounded-4">
        <pre class="text-wrap bg-transparent border-0 text-dark p-4" id="custom-generated-styles">{{ preValue }}</pre>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary w-100 w-sm-auto mb-3 mb-sm-0" aria-label="Close" type="button" @click="toggleModal">Close</button>
      <button class="btn btn-primary w-100 w-sm-auto ms-sm-3" type="button" id="copy-styles-btn" @click="copyStyles">
        <template v-if="copied"><i class="ai-check me-2 ms-n1"></i>Copied!</template>
        <template v-else>
          <i class="ai-copy me-2 ms-n1"></i>
          Copy styles
        </template>
      </button>
    </div>
  </b-modal>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { changeFontLink, getConfigFromStorage, getDefaultConfigStringFromStorage, keyPrefix, removeConfigFromStorage, setConfigToStorage, themeCustomizer } from '@/components/ThemeCustomizer/theme-customizer'
import { bodyFontSizes, bordersNRounding, colors, type CustomizerType, rootFontSizes, typography } from '@/components/ThemeCustomizer/data'
import { useClipboard } from '@vueuse/core'

const { copy, copied, isSupported } = useClipboard({ legacy: true, copiedDuring: 2000 })

const defaultConfig: CustomizerType = {
  ...colors.reduce((color, prev) => {
    return { ...color, ...{ [prev.variant]: prev.hex } }
  }, {}),
  ...typography,
  ...bordersNRounding,
  preStyles: null
}

const isCustomizerOpen = ref(false)
const isModalOpen = ref(false)

const isThemeCustomized = ref(true)
const customizerConfig = ref<CustomizerType>(defaultConfig)
const preValue = ref('')

const toggleCustomizer = () => {
  isCustomizerOpen.value = !isCustomizerOpen.value
}

const onChange = (event: Event) => {
  if (!isThemeCustomized.value) isThemeCustomized.value = true
  const newChange = { [(event.target as HTMLInputElement).name]: (event.target as HTMLInputElement).value } as any
  customizerConfig.value = { ...customizerConfig.value, ...newChange }
  customizerConfig.value = { ...customizerConfig.value, ...themeCustomizer(newChange) }
  setConfigToStorage(JSON.stringify(customizerConfig.value))
  setPreString()
}

const setPreString = () => {
  const defaultConfig = getDefaultConfigStringFromStorage()
  preValue.value = defaultConfig?.preString ?? ''
}

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value
}

const copyStyles = async () => {
  if (isSupported.value) await copy(preValue.value)
}

const resetConfig = () => {
  removeConfigFromStorage()
  isThemeCustomized.value = false
  window.location.reload()
}

onMounted(() => {
  const headElement = document.getElementsByTagName('head')[0]
  if (headElement instanceof HTMLHeadElement) {
    const createdStyleTag = document.createElement('style')
    createdStyleTag.setAttribute('id', 'customizer-styles')
    headElement.appendChild(createdStyleTag)
  }

  const savedConfig = getConfigFromStorage()
  if (savedConfig) {
    isThemeCustomized.value = true
    const objConfig: CustomizerType = JSON.parse(savedConfig)
    Object.keys(objConfig).forEach((key) => {
      key.replace(keyPrefix, '')
      customizerConfig.value[key as keyof CustomizerType] = objConfig[key as keyof CustomizerType] as never
    })
    if (Object.prototype.hasOwnProperty.call(objConfig, 'url')) changeFontLink(String(objConfig.url))
  }
  setPreString()
})
</script>
