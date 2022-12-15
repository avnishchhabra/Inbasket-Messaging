export default [{
  id: "2015",
  TaskId: "2015",
  PatientId: "2015",
  PatientName: "Patient - 2015",
  TaskSub: "MedicineRefill",
  TaskDescription:
    "Good afternoon Dr. Montgomery, Donna needs prescription for trazodone 100 mg, one tab ohs. She has only supply of 2 more days. Her pharmacy says they have send in request too. Please send to CVS at 7847 Tramway. Thank you very much",
  TaskType: "Medication",
  DateTime: "2022-12-11T11:28:30.9929745Z",
  ProviderId: "Appolo",
  Steps: [
    {
      CurrentStep: "Raw Add",
      TimeStamp: "2022-12-12T13:34:53.565621Z",
    },
    {
      CurrentStep: "NLP Process",
      TimeStamp: "2022-12-12T13:35:39.550444Z",
    },
    {
      CurrentStep: "Rule Engine",
      TimeStamp: "2022-12-12T13:34:53.565621Z",
    },
    {
      CurrentStep: "NLU Process",
      TimeStamp: "2022-12-12T13:35:39.550444Z",
    },
  
  ],
  MedicineEntities: [
    {
      MedicineName: "trazodone",
      IntentCategory: "MedicationName",
      DataSources: [
        {
          entityId: "C0040805",
          name: "UMLS",
        },
        {
          entityId: "0000020759",
          name: "AOD",
        },
        {
          entityId: "N06AX05",
          name: "ATC",
        },
        {
          entityId: "0035767",
          name: "CCPSS",
        },
        {
          entityId: "0000012498",
          name: "CHV",
        },
        {
          entityId: "DB00656",
          name: "DRUGBANK",
        },
        {
          entityId: "4271",
          name: "GS",
        },
        {
          entityId: "MTHU060475",
          name: "LNC",
        },
        {
          entityId: "340490",
          name: "MEDCIN",
        },
        {
          entityId: "d00395",
          name: "MMSL",
        },
        {
          entityId: "D014196",
          name: "MSH",
        },
        {
          entityId: "YBK48BXK30",
          name: "MTHSPL",
        },
        {
          entityId: "C29510",
          name: "NCI",
        },
        {
          entityId: "YBK48BXK30",
          name: "NCI_FDA",
        },
        {
          entityId: "004610",
          name: "NDDF",
        },
        {
          entityId: "54152",
          name: "PSY",
        },
        {
          entityId: "x01B2",
          name: "RCD",
        },
        {
          entityId: "10737",
          name: "RXNORM",
        },
        {
          entityId: "C-622F0",
          name: "SNMI",
        },
        {
          entityId: "372829000",
          name: "SNOMEDCT_US",
        },
        {
          entityId: "4019954",
          name: "VANDF",
        },
      ],
    },
    {
      MedicineName: "100 mg",
      IntentCategory: "Dosage",
      DataSources: [],
    },
    {
      MedicineName: "one tab",
      IntentCategory: "Dosage",
      DataSources: [],
    },
    {
      MedicineName: "2 more",
      IntentCategory: "Time",
      DataSources: [],
    },
  ],
  IsMedicineRefill: true,

  _ts: 1670852141,
},
{
  id: "2016",
  TaskId: "2015",
  PatientId: "2015",
  PatientName: "Patient - 2015",
  TaskSub: "MedicineRefill",
  TaskDescription:
    "Good afternoon Dr. Montgomery, Donna needs prescription for trazodone 100 mg, one tab ohs. She has only supply of 2 more days. Her pharmacy says they have send in request too. Please send to CVS at 7847 Tramway. Thank you very much",
  TaskType: "Medication",
  DateTime: "2022-12-11T11:28:30.9929745Z",
  ProviderId: "Appolo",
  Steps: [
    {
      CurrentStep: "Raw Add",
      TimeStamp: "2022-12-12T13:34:53.565621Z",
    },
    {
      CurrentStep: "NLP Process",
      TimeStamp: "2022-12-12T13:35:39.550444Z",
    },
  ],
  MedicineEntities: [
    {
      MedicineName: "trazodone",
      IntentCategory: "MedicationName",
      DataSources: [
        {
          entityId: "C0040805",
          name: "UMLS",
        },
        {
          entityId: "0000020759",
          name: "AOD",
        },
        {
          entityId: "N06AX05",
          name: "ATC",
        },
        {
          entityId: "0035767",
          name: "CCPSS",
        },
        {
          entityId: "0000012498",
          name: "CHV",
        },
        {
          entityId: "DB00656",
          name: "DRUGBANK",
        },
        {
          entityId: "4271",
          name: "GS",
        },
        {
          entityId: "MTHU060475",
          name: "LNC",
        },
        {
          entityId: "340490",
          name: "MEDCIN",
        },
        {
          entityId: "d00395",
          name: "MMSL",
        },
        {
          entityId: "D014196",
          name: "MSH",
        },
        {
          entityId: "YBK48BXK30",
          name: "MTHSPL",
        },
        {
          entityId: "C29510",
          name: "NCI",
        },
        {
          entityId: "YBK48BXK30",
          name: "NCI_FDA",
        },
        {
          entityId: "004610",
          name: "NDDF",
        },
        {
          entityId: "54152",
          name: "PSY",
        },
        {
          entityId: "x01B2",
          name: "RCD",
        },
        {
          entityId: "10737",
          name: "RXNORM",
        },
        {
          entityId: "C-622F0",
          name: "SNMI",
        },
        {
          entityId: "372829000",
          name: "SNOMEDCT_US",
        },
        {
          entityId: "4019954",
          name: "VANDF",
        },
      ],
    },
    {
      MedicineName: "100 mg",
      IntentCategory: "Dosage",
      DataSources: [],
    },
    {
      MedicineName: "one tab",
      IntentCategory: "Dosage",
      DataSources: [],
    },
    {
      MedicineName: "2 more",
      IntentCategory: "Time",
      DataSources: [],
    },
  ],
  IsMedicineRefill: true,

  _ts: 1670852141,
},
{
  id: "2017",
  TaskId: "2015",
  PatientId: "2015",
  PatientName: "Patient - 2015",
  TaskSub: "MedicineRefill",
  TaskDescription:
    "Good afternoon Dr. Montgomery, Donna needs prescription for trazodone 100 mg, one tab ohs. She has only supply of 2 more days. Her pharmacy says they have send in request too. Please send to CVS at 7847 Tramway. Thank you very much",
  TaskType: "Medication",
  DateTime: "2022-12-11T11:28:30.9929745Z",
  ProviderId: "Appolo",
  Steps: [
    {
      CurrentStep: "Raw Add",
      TimeStamp: "2022-12-12T13:34:53.565621Z",
    },
    {
      CurrentStep: "NLP Process",
      TimeStamp: "2022-12-12T13:35:39.550444Z",
    },
  ],
  MedicineEntities: [
    {
      MedicineName: "trazodone",
      IntentCategory: "MedicationName",
      DataSources: [
        {
          entityId: "C0040805",
          name: "UMLS",
        },
        {
          entityId: "0000020759",
          name: "AOD",
        },
        {
          entityId: "N06AX05",
          name: "ATC",
        },
        {
          entityId: "0035767",
          name: "CCPSS",
        },
        {
          entityId: "0000012498",
          name: "CHV",
        },
        {
          entityId: "DB00656",
          name: "DRUGBANK",
        },
        {
          entityId: "4271",
          name: "GS",
        },
        {
          entityId: "MTHU060475",
          name: "LNC",
        },
        {
          entityId: "340490",
          name: "MEDCIN",
        },
        {
          entityId: "d00395",
          name: "MMSL",
        },
        {
          entityId: "D014196",
          name: "MSH",
        },
        {
          entityId: "YBK48BXK30",
          name: "MTHSPL",
        },
        {
          entityId: "C29510",
          name: "NCI",
        },
        {
          entityId: "YBK48BXK30",
          name: "NCI_FDA",
        },
        {
          entityId: "004610",
          name: "NDDF",
        },
        {
          entityId: "54152",
          name: "PSY",
        },
        {
          entityId: "x01B2",
          name: "RCD",
        },
        {
          entityId: "10737",
          name: "RXNORM",
        },
        {
          entityId: "C-622F0",
          name: "SNMI",
        },
        {
          entityId: "372829000",
          name: "SNOMEDCT_US",
        },
        {
          entityId: "4019954",
          name: "VANDF",
        },
      ],
    },
    {
      MedicineName: "100 mg",
      IntentCategory: "Dosage",
      DataSources: [],
    },
    {
      MedicineName: "one tab",
      IntentCategory: "Dosage",
      DataSources: [],
    },
    {
      MedicineName: "2 more",
      IntentCategory: "Time",
      DataSources: [],
    },
  ],
  IsMedicineRefill: true,

  _ts: 1670852141,
},
{
  id: "2018",
  TaskId: "2015",
  PatientId: "2015",
  PatientName: "Patient - 2015",
  TaskSub: "MedicineRefill",
  TaskDescription:
    "Good afternoon Dr. Montgomery, Donna needs prescription for trazodone 100 mg, one tab ohs. She has only supply of 2 more days. Her pharmacy says they have send in request too. Please send to CVS at 7847 Tramway. Thank you very much",
  TaskType: "Medication",
  DateTime: "2022-12-11T11:28:30.9929745Z",
  ProviderId: "Appolo",
  Steps: [
    {
      CurrentStep: "Raw Add",
      TimeStamp: "2022-12-12T13:34:53.565621Z",
    },
    {
      CurrentStep: "NLP Process",
      TimeStamp: "2022-12-12T13:35:39.550444Z",
    },
  ],
  MedicineEntities: [
    {
      MedicineName: "trazodone",
      IntentCategory: "MedicationName",
      DataSources: [
        {
          entityId: "C0040805",
          name: "UMLS",
        },
        {
          entityId: "0000020759",
          name: "AOD",
        },
        {
          entityId: "N06AX05",
          name: "ATC",
        },
        {
          entityId: "0035767",
          name: "CCPSS",
        },
        {
          entityId: "0000012498",
          name: "CHV",
        },
        {
          entityId: "DB00656",
          name: "DRUGBANK",
        },
        {
          entityId: "4271",
          name: "GS",
        },
        {
          entityId: "MTHU060475",
          name: "LNC",
        },
        {
          entityId: "340490",
          name: "MEDCIN",
        },
        {
          entityId: "d00395",
          name: "MMSL",
        },
        {
          entityId: "D014196",
          name: "MSH",
        },
        {
          entityId: "YBK48BXK30",
          name: "MTHSPL",
        },
        {
          entityId: "C29510",
          name: "NCI",
        },
        {
          entityId: "YBK48BXK30",
          name: "NCI_FDA",
        },
        {
          entityId: "004610",
          name: "NDDF",
        },
        {
          entityId: "54152",
          name: "PSY",
        },
        {
          entityId: "x01B2",
          name: "RCD",
        },
        {
          entityId: "10737",
          name: "RXNORM",
        },
        {
          entityId: "C-622F0",
          name: "SNMI",
        },
        {
          entityId: "372829000",
          name: "SNOMEDCT_US",
        },
        {
          entityId: "4019954",
          name: "VANDF",
        },
      ],
    },
    {
      MedicineName: "100 mg",
      IntentCategory: "Dosage",
      DataSources: [],
    },
    {
      MedicineName: "one tab",
      IntentCategory: "Dosage",
      DataSources: [],
    },
    {
      MedicineName: "2 more",
      IntentCategory: "Time",
      DataSources: [],
    },
  ],
  IsMedicineRefill: true,

  _ts: 1670852141,
},
{
  id: "2019",
  TaskId: "2015",
  PatientId: "2015",
  PatientName: "Patient - 2015",
  TaskSub: "MedicineRefill",
  TaskDescription:
    "Good afternoon Dr. Montgomery, Donna needs prescription for trazodone 100 mg, one tab ohs. She has only supply of 2 more days. Her pharmacy says they have send in request too. Please send to CVS at 7847 Tramway. Thank you very much",
  TaskType: "Medication",
  DateTime: "2022-12-11T11:28:30.9929745Z",
  ProviderId: "Appolo",
  Steps: [
    {
      CurrentStep: "Raw Add",
      TimeStamp: "2022-12-12T13:34:53.565621Z",
    },
    {
      CurrentStep: "NLP Process",
      TimeStamp: "2022-12-12T13:35:39.550444Z",
    },
  ],
  MedicineEntities: [
    {
      MedicineName: "trazodone",
      IntentCategory: "MedicationName",
      DataSources: [
        {
          entityId: "C0040805",
          name: "UMLS",
        },
        {
          entityId: "0000020759",
          name: "AOD",
        },
        {
          entityId: "N06AX05",
          name: "ATC",
        },
        {
          entityId: "0035767",
          name: "CCPSS",
        },
        {
          entityId: "0000012498",
          name: "CHV",
        },
        {
          entityId: "DB00656",
          name: "DRUGBANK",
        },
        {
          entityId: "4271",
          name: "GS",
        },
        {
          entityId: "MTHU060475",
          name: "LNC",
        },
        {
          entityId: "340490",
          name: "MEDCIN",
        },
        {
          entityId: "d00395",
          name: "MMSL",
        },
        {
          entityId: "D014196",
          name: "MSH",
        },
        {
          entityId: "YBK48BXK30",
          name: "MTHSPL",
        },
        {
          entityId: "C29510",
          name: "NCI",
        },
        {
          entityId: "YBK48BXK30",
          name: "NCI_FDA",
        },
        {
          entityId: "004610",
          name: "NDDF",
        },
        {
          entityId: "54152",
          name: "PSY",
        },
        {
          entityId: "x01B2",
          name: "RCD",
        },
        {
          entityId: "10737",
          name: "RXNORM",
        },
        {
          entityId: "C-622F0",
          name: "SNMI",
        },
        {
          entityId: "372829000",
          name: "SNOMEDCT_US",
        },
        {
          entityId: "4019954",
          name: "VANDF",
        },
      ],
    },
    {
      MedicineName: "100 mg",
      IntentCategory: "Dosage",
      DataSources: [],
    },
    {
      MedicineName: "one tab",
      IntentCategory: "Dosage",
      DataSources: [],
    },
    {
      MedicineName: "2 more",
      IntentCategory: "Time",
      DataSources: [],
    },
  ],
  IsMedicineRefill: true,

  _ts: 1670852141,
},
{
  id: "2020",
  TaskId: "2015",
  PatientId: "2015",
  PatientName: "Patient - 2015",
  TaskSub: "MedicineRefill",
  TaskDescription:
    "Good afternoon Dr. Montgomery, Donna needs prescription for trazodone 100 mg, one tab ohs. She has only supply of 2 more days. Her pharmacy says they have send in request too. Please send to CVS at 7847 Tramway. Thank you very much",
  TaskType: "Medication",
  DateTime: "2022-12-11T11:28:30.9929745Z",
  ProviderId: "Appolo",
  Steps: [
    {
      CurrentStep: "Raw Add",
      TimeStamp: "2022-12-12T13:34:53.565621Z",
    },
    {
      CurrentStep: "NLP Process",
      TimeStamp: "2022-12-12T13:35:39.550444Z",
    },
  ],
  MedicineEntities: [
    {
      MedicineName: "trazodone",
      IntentCategory: "MedicationName",
      DataSources: [
        {
          entityId: "C0040805",
          name: "UMLS",
        },
        {
          entityId: "0000020759",
          name: "AOD",
        },
        {
          entityId: "N06AX05",
          name: "ATC",
        },
        {
          entityId: "0035767",
          name: "CCPSS",
        },
        {
          entityId: "0000012498",
          name: "CHV",
        },
        {
          entityId: "DB00656",
          name: "DRUGBANK",
        },
        {
          entityId: "4271",
          name: "GS",
        },
        {
          entityId: "MTHU060475",
          name: "LNC",
        },
        {
          entityId: "340490",
          name: "MEDCIN",
        },
        {
          entityId: "d00395",
          name: "MMSL",
        },
        {
          entityId: "D014196",
          name: "MSH",
        },
        {
          entityId: "YBK48BXK30",
          name: "MTHSPL",
        },
        {
          entityId: "C29510",
          name: "NCI",
        },
        {
          entityId: "YBK48BXK30",
          name: "NCI_FDA",
        },
        {
          entityId: "004610",
          name: "NDDF",
        },
        {
          entityId: "54152",
          name: "PSY",
        },
        {
          entityId: "x01B2",
          name: "RCD",
        },
        {
          entityId: "10737",
          name: "RXNORM",
        },
        {
          entityId: "C-622F0",
          name: "SNMI",
        },
        {
          entityId: "372829000",
          name: "SNOMEDCT_US",
        },
        {
          entityId: "4019954",
          name: "VANDF",
        },
      ],
    },
    {
      MedicineName: "100 mg",
      IntentCategory: "Dosage",
      DataSources: [],
    },
    {
      MedicineName: "one tab",
      IntentCategory: "Dosage",
      DataSources: [],
    },
    {
      MedicineName: "2 more",
      IntentCategory: "Time",
      DataSources: [],
    },
  ],
  IsMedicineRefill: true,

  _ts: 1670852141,
},
{
  id: "2021",
  TaskId: "2015",
  PatientId: "2015",
  PatientName: "Patient - 2015",
  TaskSub: "MedicineRefill",
  TaskDescription:
    "Good afternoon Dr. Montgomery, Donna needs prescription for trazodone 100 mg, one tab ohs. She has only supply of 2 more days. Her pharmacy says they have send in request too. Please send to CVS at 7847 Tramway. Thank you very much",
  TaskType: "Medication",
  DateTime: "2022-12-11T11:28:30.9929745Z",
  ProviderId: "Appolo",
  Steps: [
    {
      CurrentStep: "Raw Add",
      TimeStamp: "2022-12-12T13:34:53.565621Z",
    },
    {
      CurrentStep: "NLP Process",
      TimeStamp: "2022-12-12T13:35:39.550444Z",
    },
  ],
  MedicineEntities: [
    {
      MedicineName: "trazodone",
      IntentCategory: "MedicationName",
      DataSources: [
        {
          entityId: "C0040805",
          name: "UMLS",
        },
        {
          entityId: "0000020759",
          name: "AOD",
        },
        {
          entityId: "N06AX05",
          name: "ATC",
        },
        {
          entityId: "0035767",
          name: "CCPSS",
        },
        {
          entityId: "0000012498",
          name: "CHV",
        },
        {
          entityId: "DB00656",
          name: "DRUGBANK",
        },
        {
          entityId: "4271",
          name: "GS",
        },
        {
          entityId: "MTHU060475",
          name: "LNC",
        },
        {
          entityId: "340490",
          name: "MEDCIN",
        },
        {
          entityId: "d00395",
          name: "MMSL",
        },
        {
          entityId: "D014196",
          name: "MSH",
        },
        {
          entityId: "YBK48BXK30",
          name: "MTHSPL",
        },
        {
          entityId: "C29510",
          name: "NCI",
        },
        {
          entityId: "YBK48BXK30",
          name: "NCI_FDA",
        },
        {
          entityId: "004610",
          name: "NDDF",
        },
        {
          entityId: "54152",
          name: "PSY",
        },
        {
          entityId: "x01B2",
          name: "RCD",
        },
        {
          entityId: "10737",
          name: "RXNORM",
        },
        {
          entityId: "C-622F0",
          name: "SNMI",
        },
        {
          entityId: "372829000",
          name: "SNOMEDCT_US",
        },
        {
          entityId: "4019954",
          name: "VANDF",
        },
      ],
    },
    {
      MedicineName: "100 mg",
      IntentCategory: "Dosage",
      DataSources: [],
    },
    {
      MedicineName: "one tab",
      IntentCategory: "Dosage",
      DataSources: [],
    },
    {
      MedicineName: "2 more",
      IntentCategory: "Time",
      DataSources: [],
    },
  ],
  IsMedicineRefill: true,

  _ts: 1670852141,
},
{
  id: "2022",
  TaskId: "2015",
  PatientId: "2015",
  PatientName: "Patient - 2015",
  TaskSub: "MedicineRefill",
  TaskDescription:
    "Good afternoon Dr. Montgomery, Donna needs prescription for trazodone 100 mg, one tab ohs. She has only supply of 2 more days. Her pharmacy says they have send in request too. Please send to CVS at 7847 Tramway. Thank you very much",
  TaskType: "Medication",
  DateTime: "2022-12-11T11:28:30.9929745Z",
  ProviderId: "Appolo",
  Steps: [
    {
      CurrentStep: "Raw Add",
      TimeStamp: "2022-12-12T13:34:53.565621Z",
    },
    {
      CurrentStep: "NLP Process",
      TimeStamp: "2022-12-12T13:35:39.550444Z",
    },
  ],
  MedicineEntities: [
    {
      MedicineName: "trazodone",
      IntentCategory: "MedicationName",
      DataSources: [
        {
          entityId: "C0040805",
          name: "UMLS",
        },
        {
          entityId: "0000020759",
          name: "AOD",
        },
        {
          entityId: "N06AX05",
          name: "ATC",
        },
        {
          entityId: "0035767",
          name: "CCPSS",
        },
        {
          entityId: "0000012498",
          name: "CHV",
        },
        {
          entityId: "DB00656",
          name: "DRUGBANK",
        },
        {
          entityId: "4271",
          name: "GS",
        },
        {
          entityId: "MTHU060475",
          name: "LNC",
        },
        {
          entityId: "340490",
          name: "MEDCIN",
        },
        {
          entityId: "d00395",
          name: "MMSL",
        },
        {
          entityId: "D014196",
          name: "MSH",
        },
        {
          entityId: "YBK48BXK30",
          name: "MTHSPL",
        },
        {
          entityId: "C29510",
          name: "NCI",
        },
        {
          entityId: "YBK48BXK30",
          name: "NCI_FDA",
        },
        {
          entityId: "004610",
          name: "NDDF",
        },
        {
          entityId: "54152",
          name: "PSY",
        },
        {
          entityId: "x01B2",
          name: "RCD",
        },
        {
          entityId: "10737",
          name: "RXNORM",
        },
        {
          entityId: "C-622F0",
          name: "SNMI",
        },
        {
          entityId: "372829000",
          name: "SNOMEDCT_US",
        },
        {
          entityId: "4019954",
          name: "VANDF",
        },
      ],
    },
    {
      MedicineName: "100 mg",
      IntentCategory: "Dosage",
      DataSources: [],
    },
    {
      MedicineName: "one tab",
      IntentCategory: "Dosage",
      DataSources: [],
    },
    {
      MedicineName: "2 more",
      IntentCategory: "Time",
      DataSources: [],
    },
  ],
  IsMedicineRefill: true,

  _ts: 1670852141,
},]
