import { ref, computed } from '@vue/composition-api'
export function useFilter(items: string[]) {
    const checkItems = ref<string[]>(items)
    const isCheckAll = computed(() => checkItems.value.length === items.length)
    const handleCheckItem = (value: string[]) => {
        checkItems.value = value
    }
    const handleCheckAll = () => {
        checkItems.value = items
    }
    return {
        isCheckAll,
        rawItems: items,
        checkItems,
        handleCheckItem,
        handleCheckAll,
    }
}
