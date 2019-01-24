var Mock = require('mockjs');

const employeeIds = new Array(100).fill(0).map((val, i) => {
    const padLeft = '000000'.substr(String(i).length - 6);
    return `F${padLeft}${i}`;
});

var data = Mock.mock({
    'users|20-100': [
        {
            id: '@guid',
            firstName: '@first',
            lastName: '@last',
            name: '@cname',
            'employeeId|+1': employeeIds,
            'gender|1': [0, 1]
        }
    ]
});

module.exports = data.users;
