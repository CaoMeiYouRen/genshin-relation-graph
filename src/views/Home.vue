<template>
    <el-container>
        <el-header>
            <div>
                <el-row :gutter="0">
                    <el-col :span="12">
                        <el-form label-width="80px">
                            <el-form-item label="所属国家">
                                <el-checkbox-group
                                    v-model="checkCountrys"
                                    @change="handleCheckCountry"
                                >
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
                    <el-col :span="4">
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
        </el-header>
        <el-container>
            <el-aside width="20%">
                <h3>人物信息</h3>
                <el-form label-width="80px">
                    <el-form-item label="姓名">
                        <el-input v-model="currentNode.name" readonly />
                    </el-form-item>
                    <el-form-item label="稀有度">
                        <el-input v-model="currentNode.stars" readonly />
                    </el-form-item>
                    <el-form-item label="武器类型">
                        <el-input v-model="currentNode.weaponType" readonly />
                    </el-form-item>
                    <el-form-item label="元素属性">
                        <el-input v-model="currentNode.elementAttribute" readonly />
                    </el-form-item>
                    <el-form-item label="性别">
                        <el-input v-model="currentNode.sex" readonly />
                    </el-form-item>
                    <el-form-item label="国家">
                        <el-input v-model="currentNode.country" readonly />
                    </el-form-item>
                </el-form>
                <h3>关系信息</h3>
                <template v-if="currentRelations && currentRelations.length">
                    <div v-for="item in currentRelations" :key="item.text">
                        <el-form label-width="80px">
                            <el-form-item label="来自">
                                <el-input v-model="item.from.name" readonly />
                            </el-form-item>
                            <el-form-item label="对方">
                                <el-input v-model="item.to.name" readonly />
                            </el-form-item>
                            <el-form-item label="关系">
                                <el-input v-model="item.relationship" readonly />
                            </el-form-item>
                            <el-form-item label="关系语音">
                                <el-input
                                    v-model="item.text"
                                    type="textarea"
                                    autosize
                                    readonly
                                />
                            </el-form-item>
                        </el-form>
                    </div>
                </template>
            </el-aside>
            <el-main>
                <RelationGraph
                    ref="relationGraph"
                    :options="options"
                    :on-node-click="handleNodeClick"
                    :on-line-click="handleLineClick"
                />
            </el-main>
        </el-container>
    </el-container>
</template>

<script lang="ts">
import { useFilter } from '@/composables/useFilter'
import { useRelationGraph } from '@/composables/useRelationGraph'
import { useRelationGraphFilter } from '@/composables/useRelationGraphFilter'
import { defineComponent } from '@vue/composition-api'

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
    setup() {
        const { relationGraph, options, handleNodeClick, handleLineClick, currentNode, currentRelations } = useRelationGraph()
        const { checkItems: checkCountrys, handleCheckItem: handleCheckCountry } = useFilter(countrys)
        const { checkItems: checkSexes, handleCheckItem: handleCheckSex } = useFilter(sexes)

        return {
            relationGraph,
            options,
            handleNodeClick,
            handleLineClick,
            currentNode,
            currentRelations,
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
</style>

<style lang="scss">
    .line-class {
        font-size: 16px;
    }
    .c-rg-link-text {
        font-size: 14px !important;
    }
    .el-header {
        z-index: 10000;
        width: 100%;
        // position: fixed;
        background-color: #ebeef5;
        text-align: center;
    }

    .el-aside {
        background-color: #d3dce6;
        text-align: center;
        padding: 5px;
        height: calc(100vh - 60px);
        overflow: auto;
    }
    .el-main {
        padding: 0;
        height: calc(100vh - 60px);
    }
    .el-form-item {
        margin-bottom: 5px;
    }
</style>
