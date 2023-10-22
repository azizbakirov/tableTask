export const formatBranchData = (data) => {
    return data?.map((item) => ({
      id: item?.id,
      name: item?.name,
      address: item?.address,
      fromTime: item?.fromtime,
      toTime: item?.totime,
      edit: item?.name,
      delete: item?.name,
      key: item?.id,
    })); 

} 