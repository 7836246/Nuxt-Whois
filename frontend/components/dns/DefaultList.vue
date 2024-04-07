<script setup lang="ts">
defineProps({
  data: {
    type: Object,
    required: true
  }
})
const {t} = useI18n()
</script>

<template>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-if="data.aRecords">
              <h3 class="font-semibold text-lg text-blue-600 mb-2">{{ t('dns.aRecord') }}</h3>
              <div class="border rounded-lg p-4 bg-blue-50">
                <ul
                    class="list-none space-y-2">
                  <li v-for="(record, index) in data.aRecords" :key="'a-record-' + index" class="flex justify-between items-center">
                    <span class="font-medium text-gray-700">IP:</span>
                    <span class="font-normal text-gray-600">{{ record }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div v-if="data.nsRecords">
              <h3 class="font-semibold text-lg text-green-600 mb-2">{{ t('dns.nsRecord') }}</h3>
              <div class="border rounded-lg p-4 bg-green-50">
                <ul
                    class="list-none space-y-2">
                  <li v-for="(record, index) in data.nsRecords" :key="'ns-record-' + index" class="flex justify-between items-center">
                    <span class="font-normal text-gray-600">{{ record }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div
                v-if="data.soaRecord"
                class="md:col-span-2">
              <h3 class="font-semibold text-lg text-purple-600 mb-2">{{ t('dns.soaRecord') }}</h3>
              <div class="border rounded-lg p-4 bg-purple-50">
                <ul class="list-none space-y-2">
                  <li
                  ><span class="font-medium text-gray-700">nsname:</span> <span class="font-normal text-gray-600">{{ data.soaRecord.nsname }}</span></li>
                  <li><span class="font-medium text-gray-700">hostmaster:</span> <span class="font-normal text-gray-600">{{ data.soaRecord.hostmaster }}</span></li>
                  <li><span class="font-medium text-gray-700">serial:</span> <span class="font-normal text-gray-600">{{ data.soaRecord.serial }}</span></li>
                  <li><span class="font-medium text-gray-700">refresh:</span> <span class="font-normal text-gray-600">{{ data.soaRecord.refresh }}</span></li>
                  <li><span class="font-medium text-gray-700">retry:</span> <span class="font-normal text-gray-600">{{ data.soaRecord.retry }}</span></li>
                  <li><span class="font-medium text-gray-700">expire TTL:</span> <span class="font-normal text-gray-600">{{ data.soaRecord.expire }}</span></li>
                  <li><span class="font-medium text-gray-700">minttl TTL:</span> <span class="font-normal text-gray-600">{{ data.soaRecord.minttl }}</span></li>
                </ul>
              </div>
            </div>

          </div>
</template>

<style scoped>

</style>
