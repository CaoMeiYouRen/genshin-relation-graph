import { ref, onMounted, computed } from '@vue/composition-api'
export function useFilter(items: string[]) {
    const checkItems = ref<string[]>(items)
    const isCheckAll = computed(() => {
        return checkItems.value.length === items.length
    })
    const handleCheckItem = (value: string[]) => {
        console.log(value)
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