export const columnData = [
    {
        name: 'Title',
        selector: row => row.title,
    },
    {
        name: 'Year',
        selector: row => row.year,
    },
    {
        name: 'course',
        selector: row => row.year,
    },
    {
        name: 'company',
        selector: row => row.year,
    },
    {
        name: 'acc',
        selector: row => row.year,
    },
    {
        name: 'file',
        selector: row => row.year,
    },
    {
        name: 'ward',
        selector: row => row.year,
    },
];

export const tableData = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
        course:'java',
        course:'Accenture',
        acc:'755663',
        file:'/app/hq_bills/sample.pdf',
        ward:'54663636'
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
        course:'java',
        course:'HCL',
        acc:'755663',
        file:'/app/hq_bills/sample.pdf',
        ward:'54663636'
    },
    {
        id: 3,
        title: 'Ghostbusters',
        year: '1984',
        course:'java',
        course:'HCL',
        acc:'755663',
        file:'/app/hq_bills/sample.pdf',
        ward:'54663636'
    },
    {
        id: 4,
        title: 'Ghostbusters',
        year: '1984',
        course:'java',
        course:'HCL',
        acc:'755663',
        file:'/app/hq_bills/sample.pdf',
        ward:'54663636'
    },
    {
        id: 5,
        title: 'Ghostbusters',
        year: '1984',
        course:'java',
        course:'HCL',
        acc:'755663',
        file:'/app/hq_bills/sample.pdf',
        ward:'54663636'
    },
]

//  Internally, customStyles will deep merges your customStyles with the default styling.
export const customStyles = {
    rows: {
        style: {
            minHeight: '72px', // override the row height
        },
    },
    headCells: {
        style: {
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
            backgroundColor: '#c9d9e8',
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
        },
    },
};