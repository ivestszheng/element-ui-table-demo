<template>
  <el-table :data="tableData" class="my-table" :header-cell-class-name="genHeaderCellClassName">
    <!-- <el-table-column label="配送信息" width="780"> -->
    <el-table-column label="配送信息" width="780" fixed="left">
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column label="地址" width="660">
        <el-table-column prop="province" label="省份" width="120"> </el-table-column>
        <el-table-column prop="city" label="市区" width="120"> </el-table-column>
        <el-table-column prop="address" label="地址" width="300"> </el-table-column>
        <el-table-column prop="zip" label="邮编" width="120"> </el-table-column>
      </el-table-column>
    </el-table-column>
    <el-table-column prop="date" label="日期" width="150"> </el-table-column>
    <el-table-column label="空" width="150"> </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    this.tableData = [
      {
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
      },
      {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
      },
      {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
      },
      {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
      },
      {
        date: '2016-05-08',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
      },
      {
        date: '2016-05-06',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
      },
      {
        date: '2016-05-07',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
      },
    ];
    return {};
  },
  methods: {
    genHeaderCellClassName({ row, column, rowIndex, columnIndex }) {
      // 省份列
      if (rowIndex === 2 && columnIndex === 0) {
        this.$nextTick(() => {
          const cells = document.getElementsByClassName(column.id);
          // 代表此时有 fixed 列
          if (cells.length > this.tableData.length) {
            const bottomHeader = cells[0];
            const topHeader = cells[this.tableData.length + 1];

            bottomHeader.setAttribute('colspan', 2);
            topHeader.setAttribute('colspan', 2);
          } else {
            const targetHeader = cells[0];

            targetHeader.setAttribute('colspan', 2);
          }
        });
      }
      // 给被合并的表头增加标识
      if (rowIndex === 2 && columnIndex === 1) return 'cell-hide';
      return null;
    },
  },
};
</script>
<style lang="less" scoped>
.my-table {
  width: 800px;
  margin: 0 auto;
}
.el-table /deep/ .cell-hide {
  display: none;
}
</style>
