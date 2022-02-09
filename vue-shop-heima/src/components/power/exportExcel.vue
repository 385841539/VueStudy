<template>
    <el-button size="middle" type="primary" v-on:click="downloadMater()"
        >下载Excel</el-button
    >
</template>
<script>
import XLSX from 'xlsx'
import FileSaver from 'file-saver'

export default {
    props: {
        // exportList: {
        //     type: Array,
        //     default: [],
        // },
        exportName: {
            type: String,
            default: '模板',
        },
    },
    data() {
        return {
            exportList: [
                {
                    name: '韩版设计时尚风衣大',
                    number: 'MPM00112',
                    salePrice: '￥999.00',
                    stocknums: 3423,
                    salesnums: 3423,
                    sharenums: 3423,
                },
                {
                    name: '韩版设计时尚风衣大',
                    number: 'MPM00112',
                    salePrice: '￥999.00',
                    stocknums: 3423,
                    salesnums: 3423,
                    sharenums: 3423,
                },
            ],
        }
    },

    methods: {
        downloadMater() {
            const defaultCellStyle = {
                font: { name: 'Verdana', sz: 11, color: 'FF00FF88' },
                fill: { fgColor: { rgb: 'FFFFAA00' } },
            }
            const wopts = {
                bookType: 'xlsx',
                bookSST: false,
                type: 'binary',
                defaultCellStyle: defaultCellStyle,
                showGridLines: false,
            }
            const wb = { SheetNames: ['Sheet1'], Sheets: {}, Props: {} }
            let data = this.exportList
            wb.Sheets['Sheet1'] = XLSX.utils.json_to_sheet(data)

            //创建二进制对象写入转换好的字节流
            let tmpDown = new Blob([this.s2ab(XLSX.write(wb, wopts))], {
                type: 'application/octet-stream',
            })
            // 保存文件
            FileSaver.saveAs(tmpDown, this.exportName + '.xlsx')
        },
        // 字符串转字符流
        s2ab(s) {
            if (typeof ArrayBuffer !== 'undefined') {
                let buf = new ArrayBuffer(s.length)
                let view = new Uint8Array(buf)
                for (let i = 0; i != s.length; ++i)
                    view[i] = s.charCodeAt(i) & 0xff
                return buf
            } else {
                let buf = new Array(s.length)
                for (let j = 0; j != s.length; ++j)
                    buf[j] = s.charCodeAt(j) & 0xff
                return buf
            }
        },
    },
}
</script>
