import { ref } from 'vue'

export function useGeoJs() {
  const geoData = ref<unknown | null>(null)
  const loading = ref(false)
  const error = ref<unknown | null>(null)

  const fetchGeoData = async () => {
    loading.value = true
    try {
      // 使用GeoJS API (完全免费无限制)
      const data = await $fetch('https://get.geojs.io/v1/ip/geo.json');
      geoData.value = data;
      console.log('geoData', geoData.value)
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  return {
    geoData,
    loading,
    error,
    fetchGeoData
  }
}