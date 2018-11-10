export const shopOrderOperations = [
  {
    orderNo: "1",
    description: "test",
    createdDate: "2018-08-06 00:00:00",
    partNo: "P1",
    structureRevision: "1",
    routingRevision: "1",
    requiredDate: "2018-10-30 00:00:00",
    startDate: "",
    finishDate: "",
    schedulingDirection: "Forward",
    customerNo: "C1",
    shopOrderStatus: "Created",
    priority: "High",
    operations: [
      {
        orderNo: "1",
        operationId: 100,
        operationNo: 10,
        workCenterNo: "WC2",
        workCenterType: "Milling",
        operationDescription: "op1",
        operationSequence: 1,
        precedingOperationId: 0,
        workCenterRuntimeFactor: 0,
        workCenterRuntime: 8,
        laborRuntimeFactor: 0,
        laborRunTime: 0,
        opStartDateTime: "2018-08-07 13:00:00",
        opFinishDateTime: "2018-08-08 13:00:00",
        quantity: 0
      },
      {
        orderNo: "1",
        operationId: 101,
        operationNo: 20,
        workCenterNo: "WC1",
        workCenterType: "Milling",
        operationDescription: "op2",
        operationSequence: 2,
        precedingOperationId: 0,
        workCenterRuntimeFactor: 0,
        workCenterRuntime: 2,
        laborRuntimeFactor: 0,
        laborRunTime: 0,
        opStartDateTime: "2018-08-08 13:00:00",
        opFinishDateTime: "2018-08-08 15:00:00",
        quantity: 0
      }
    ]
  },
  {
    orderNo: "2",
    description: "test",
    createdDate: "2018-08-10 00:00:00",
    partNo: "P2",
    structureRevision: "1",
    routingRevision: "1",
    requiredDate: "2018-10-31 00:00:00",
    startDate: "",
    finishDate: "",
    schedulingDirection: "Forward",
    customerNo: "C2",
    shopOrderStatus: "Created",
    priority: "High",
    operations: [
      {
        orderNo: "2",
        operationId: 201,
        operationNo: 30,
        workCenterNo: "WC1",
        workCenterType: "Milling",
        operationDescription: "op3",
        operationSequence: 1,
        precedingOperationId: 0,
        workCenterRuntimeFactor: 0,
        workCenterRuntime: 4,
        laborRuntimeFactor: 0,
        laborRunTime: 0,
        opStartDateTime: "2018-08-10 08:00:00",
        opFinishDateTime: "2018-08-10 13:00:00",
        quantity: 0
      },
      {
        orderNo: "2",
        operationId: 202,
        operationNo: 40,
        workCenterNo: "WC1",
        workCenterType: "Milling",
        operationDescription: "op4",
        operationSequence: 2,
        precedingOperationId: 0,
        workCenterRuntimeFactor: 0,
        workCenterRuntime: 2,
        laborRuntimeFactor: 0,
        laborRunTime: 0,
        opStartDateTime: "2018-08-10 13:00:00",
        opFinishDateTime: "2018-08-10 15:00:00",
        quantity: 0
      }
    ]
  }
];