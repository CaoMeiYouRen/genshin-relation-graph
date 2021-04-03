<template>
    <div class="home">
        <div class="filter">
            <el-row :gutter="0">
                <el-col :span="12">
                    <el-form label-width="80px">
                        <el-form-item label="所属国家">
                            <el-checkbox-group v-model="checkCountrys" @change="handleCheckCountry">
                                <el-checkbox
                                    v-for="item in countrys"
                                    :key="item"
                                    :label="item"
                                >
                                    {{ item }}
                                </el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :span="12">
                    <el-form label-width="80px">
                        <el-form-item label="性别">
                            <el-checkbox-group v-model="checkSexes" @change="handleCheckSex">
                                <el-checkbox
                                    v-for="item in sexes"
                                    :key="item"
                                    :label="item"
                                >
                                    {{ item }}
                                </el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>
        </div>
        <div style="height:calc(100vh - 5px);">
            <RelationGraph ref="relationGraph" :options="options" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from '@vue/composition-api'
import { useRelationGraph } from '@/composables/useRelationGraph'
import { useFilter } from '@/composables/useFilter'
import { useRelationGraphFilter } from '@/composables/useRelationGraphFilter'

const countrys = [
    '蒙德',
    '璃月',
    '稻妻',
    '须弥',
    '枫丹',
    '纳塔',
    '至冬',
]
const sexes = [
    '男',
    '女',
]
export default defineComponent({
    name: 'Home',
    setup(props, ctx) {
        const { relationGraph, options } = useRelationGraph()
        const { checkItems: checkCountrys, handleCheckItem: handleCheckCountry } = useFilter(countrys)
        const { checkItems: checkSexes, handleCheckItem: handleCheckSex } = useFilter(sexes)

        return {
            relationGraph,
            options,
            ...useRelationGraphFilter(relationGraph, checkCountrys, checkSexes),
            checkCountrys,
            handleCheckCountry,
            countrys,
            checkSexes,
            handleCheckSex,
            sexes,
        }
    },
})
</script>

<style lang="scss" scoped>
    .filter {
        z-index: 10000;
        width: 100%;
        position: absolute;
        background: #fff;
    }
</style>
