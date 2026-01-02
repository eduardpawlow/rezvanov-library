<script setup lang="ts">
	import type { Toast } from '@nuxt/ui/runtime/composables/useToast.js';
import { getPublicationList } from '~/assets/content/publications';

	const publications = getPublicationList();
	let toast: Toast | null = null

	const showDownloadToast = () => {
		if (toast) { return }

		toast = useToast().add({
			title: 'Загрузка файла началась...',
			color: 'secondary',
			"onUpdate:open": (isTruthy) => { !isTruthy && (toast = null) },
		})
	}
</script>

<template>
  <UPageColumns class="gap-4">
    <UPageCard
      v-for="(item, index) in publications"
      :key="item.id"
      class="relative mb-4 min-[900px]:hover:bg-secondary-50" 
      variant="subtle"
      :description="item.description"
    >
		<template #title>
			{{ item.title }}
			<UBadge 
				:label="item.category"
				class="absolute right-1 top-1"
				color="secondary"
			/>
		</template>
		<template #footer>
			<UButton
				download
				external
			  icon="i-lucide-download"
				color="neutral"
				variant="outline"
				label="Скачать"
				:href="item.file.link"
				:ui="{
      		leadingIcon: 'text-secondary'
    		}"
				@click="showDownloadToast"
			/>
		</template>
    </UPageCard>
  </UPageColumns>
</template>

