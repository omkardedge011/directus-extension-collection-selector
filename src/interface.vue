<template>
	<VSelect :model-value="value" :items="collections" @update:model-value="collectionSelected" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStores } from "@directus/extensions-sdk";
import type { Collection } from "@directus/types";

export default defineComponent({
	props: {
		value: {
			type: String,
			default: null,
		},
		starts_with: {
			type: String,
			default: null,
		},
	},
	emits: ["input"],
	setup(props, { emit }) {
		const { useCollectionsStore } = useStores();
		const collectionsStore = useCollectionsStore();

		const allCollections = collectionsStore.databaseCollections;
		let finalCollections: Collection[] = allCollections;

		if(props.starts_with){
			finalCollections = allCollections.filter((item: Collection) => item.collection.startsWith(props.starts_with));
		}

		const collections: any = ref([]);

		finalCollections.forEach((item: Collection) => {
			collections.value.push({
				text: item.collection,
				value: item.collection,
			});
		});

		function collectionSelected(collection: string) {
			emit("input", collection);
		}

		return {
			collections,
			collectionSelected,
		};
	},
});
</script>
