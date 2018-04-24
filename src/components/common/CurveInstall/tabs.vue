<template>
  <div class="tabs">
    <template>
        <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
            <el-tab-pane label="负荷典型年功率曲线" name="first">
                <LoadTypicalYearPowerCurve></LoadTypicalYearPowerCurve>
            </el-tab-pane>
            <el-tab-pane label="发电典型日出力曲线" name="second">
                <GeneratingTypicalDayContributeCurve></GeneratingTypicalDayContributeCurve>
            </el-tab-pane>
            <el-tab-pane label="电荷典型日功率曲线" name="third">
                <ChargeTypicalDayPowercurve></ChargeTypicalDayPowercurve>
            </el-tab-pane>
            <el-tab-pane label="典型温度曲线" name="fourth">
                <TypicalTemperatureCurve></TypicalTemperatureCurve>
            </el-tab-pane>
        </el-tabs>
    </template>
  </div>
</template>
<script>
    import LoadTypicalYearPowerCurve from "@/components/common/CurveInstall/loadTypicalYearPowerCurve/loadTypicalYearPowerCurve"
    import GeneratingTypicalDayContributeCurve from "@/components/common/CurveInstall/generatingTypicalDayContributeCurve/generatingTypicalDayContributeCurve"
    import ChargeTypicalDayPowercurve from "@/components/common/CurveInstall/chargeTypicalDayPowercurve/chargeTypicalDayPowercurve"
    import TypicalTemperatureCurve from "@/components/common/CurveInstall/typicalTemperatureCurve/typicalTemperatureCurve"

    export default {
        name: 'tabs',
        data () {
        return {
            activeName: 'third'
        }
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        },
        components:{
            LoadTypicalYearPowerCurve,
            GeneratingTypicalDayContributeCurve,
            ChargeTypicalDayPowercurve,
            TypicalTemperatureCurve
        }
    }
    
</script>
<style scoped>
.tabs{
    margin-top: 15px 
}
</style>