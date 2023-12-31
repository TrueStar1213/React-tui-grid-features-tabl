import React from 'react';
import Grid from '@toast-ui/react-grid';
import { TableData } from '../../_mock/TableData';

class CustomTextEditor {
    constructor(props) {
      const el = document.createElement('input');
      const { maxLength } = props.columnInfo.editor.options;

      el.type = 'text';
      el.maxLength = maxLength;
      el.value = String(props.value);

      this.el = el;
    }

    getElement() {
      return this.el;
    }

    getValue() {
      return this.el.value;
    }

    mounted() {
      this.el.select();
    }
  }

const columns = [
    {
        header: 'Name',
        name: 'name',
        width: 250,
        align: 'center'
    },
    {
        header: 'Artist',
        name: 'artist',
        width: 250,
        align: 'center',
        editor: {
            type: CustomTextEditor,
            options: {
                maxLength: 10
            }
        }
    },
    {
        header: 'Type',
        name: 'type',
        width: 150,
        align: 'center',
        editor: {
            type: CustomTextEditor,
            options: {
                maxLength: 10
            }
        }
    },
    {
        header: 'Genre',
        name: 'genre',
        width: 150,
        align: 'center',
        className:'tui-grid-cell-required',
        editor: {
            type: CustomTextEditor,
            options: {
                maxLength: 10
            }
        }
    },
    {
        header: 'Release',
        name: 'release',
        width: 150,
        align: 'center',
        className:'tui-grid-cell-required',
        editor: {
            type: 'datePicker',
            options: {
            //   selectableRanges: [[new Date(2014, 3, 10), new Date(2014, 5, 20)]]
                format: 'yyyy-MM-dd',
                timepicker: false
            }
        }
    },
    {
        header: 'Price',
        name: 'price',
        width: 150,
        align: 'center',
        sortingType: 'asc',
        sortable: true
    },
    {
        header: 'Download',
        name: 'download',
        width: 150,
        align: 'center',
    },
    {
        header: 'Listen',
        name: 'listen',
        width: 150,
        align: 'center',
    },


];

const summary = {
    height: 40,
    position: 'bottom', // or 'top'

    columnContent : {
        price : {
          template: function(valueMap) {
            return `Sum: ${valueMap.sum}`;
          }
        },
        download: {
          template: function(valueMap) {
            return `AVG: ${valueMap.avg.toFixed(2)}`;
          }
        },
        listen: {
          template: function(valueMap) {
            return `MAX: ${valueMap.max}`;
          }
        }
    }
}

const columnOptions = {
    frozenCount: 2,
    frozenBorderWidth: 2,
}

const header = {
    height: 100,
    complexColumns: [
        {
            header: 'Details Info',
            name: 'mergeColumn1',
            childNames: ['type', 'genre', 'release']
        },
        {
            header: 'Count',
            name: 'mergeColumn2',
            childNames: ['download', 'listen']
        },
        {
            header: 'Extra Info',
            name: 'mergeColumn3',
            childNames: ['price', 'mergeColumn2']
        }
    ]
}

const select = (e) => {
    console.log(e);
}

const MyComponent = () => (
    <Grid
        data={TableData}
        columns={columns}
        onCheck={select}
        className='table-center'
        width = {1200}
        bodyHeight={500}
        scrollX = {true}
        scrollY = {true}
        rowHeaders={['rowNum', 'checkbox']}
        summary={summary}
        header={header}
        columnOptions={columnOptions}
    />
);

const FeatureTable = () => {
    return (
        <MyComponent />
    )
}

export default FeatureTable
