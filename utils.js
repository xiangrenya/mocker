exports.pagination = (data, pageNum = 1, pageSize = 20) => {
    if (typeof pageNum === 'string') {
        pageNum = parseInt(pageNum);
    }
    if (typeof pageSize === 'string') {
        pageSize = parseInt(pageSize);
    }
    const startIndex = (pageNum - 1) * pageSize;
    const endIndex = pageNum * pageSize;
    return {
        page: {
            pageNum,
            total: data.length
        },
        data: data.slice(startIndex, endIndex)
    };
};
