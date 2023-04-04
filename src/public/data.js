
// const data = {
//     "apiComponentList" : [
//         {
//             "apiConfigDefinition" : {
//                 "apiReferenceId" : "635fcbd36c0bcffbaaa7c692",
//                 "apiConfigReference" : {
//                     "serviceName" : "Fintech LSP Service",
//                     "verb" : "PUT",
//                     "url" : "/api/v1/realm/{realmId}/user/{userId}/loans/additionalInfo"
//                 },
//                 "name" : "PUT: /api/v1/realm/{realmId}/user/{userId}/loans/additionalInfo"
//             },
//             "mappings" : {
//                 "requestBodyMapping" : {
//                     "loanId" : "$.input.loanId",
//                     "refType" : "$.input.refType",
//                     "refId" : "$.input.refId"
//                 },
//                 "pathParamMapping" : {
//                     "userId" : "$$USERID",
//                     "realmId" : "$$REALM_ID"
//                 }
//             },
//             "name" : "update-loan-additional-info"
//         },
//         {
//             "apiConfigDefinition" : {
//                 "apiReferenceId" : "627cedc02bdccddad4e0f48c",
//                 "apiConfigReference" : {
//                     "serviceName" : "Fintech LSP Service",
//                     "verb" : "GET",
//                     "url" : "/api/v1/realm/{realmId}/user/{userId}/loans/{loanId}"
//                 },
//                 "name" : "GET: /api/v1/realm/{realmId}/user/{userId}/loans/{loanId}"
//             },
//             "mappings" : {
//                 "requestBodyMapping" : {

//                 },
//                 "pathParamMapping" : {
//                     "realmId" : "ninjacart",
//                     "userId" : "$$USERID",
//                     "loanId" : "$.input.loanId"
//                 },
//                 "headerMapping" : {

//                 }
//             },
//             "name" : "get-all-loans",
               
//         },
//         {
//             "apiConfigDefinition" : {
//                 "apiReferenceId" : "6362296d6c0bcffbaaa7c6a7",
//                 "apiConfigReference" : {
//                     "serviceName" : "NC LSP Gateway Service",
//                     "verb" : "POST",
//                     "url" : "/api/loans/{loanId}/approve"
//                 },
//                 "name" : "approve-loan-by-id"
//             },
//             "mappings" : {
//                 "requestBodyMapping" : {
//                     "__SELF" : {
//                         "approvedOnDate" : "$.auto-approve-liquiloans-bnpl-loan[1]['data']['submittedOnDate']",
//                         "approvedLoanAmount" : "$.auto-approve-liquiloans-bnpl-loan[1]['data']['allowedLimit']",
//                         "expectedDisbursementDate" : "$.auto-approve-liquiloans-bnpl-loan[1]['data']['expectedDisbursementDate']",
//                         "note" : "approving loan",
//                         "locale" : "en",
//                         "dateFormat" : "dd-MM-yyyy"
//                     }
//                 },
//                 "pathParamMapping" : {
//                     "loanId" : "$.auto-approve-liquiloans-bnpl-loan[1]['data']['externalId']"
//                 }
//             },
//             "name" : "approve-loan-by-id"
//         },
//         {
//             "apiConfigDefinition" : {
//                 "apiReferenceId" : "6362296d6c0bcffbaaa7c6ab",
//                 "apiConfigReference" : {
//                     "serviceName" : "NC LSP Gateway Service",
//                     "verb" : "POST",
//                     "url" : "/api/makercheckers/{commandId}/approve"
//                 },
//                 "name" : "approve-maker-checker"
//             },
//             "mappings" : {
//                 "pathParamMapping" : {
//                     "commandId" : "$.auto-approve-liquiloans-bnpl-loan[2]['commandId']"
//                 }
//             },
//             "ruleConfigIdentifierDefinition" : {
//                 "evaluationMode" : "CONTINUOUS",
//                 "expressions" : [
//                     {
//                         "type" : "CONDITIONAL",
//                         "rhs" : "{{$.auto-approve-liquiloans-bnpl-loan[2].commandId}} !=null"
//                     }
//                 ],
//                 "name" : "convertToApproveLoan"
//             },
//             "runtimeConfig" : {
//                 "continueOnError" : true
//             },
//             "name" : "approve-maker-checker"
//         },
//         {
//             "apiConfigDefinition" : {
//                 "apiReferenceId" : "638690fafb356927656761df",
//                 "apiConfigReference" : {
//                     "serviceName" : "User Store Services",
//                     "verb" : "GET",
//                     "url" : "/api/v1/{entityType}/{id}"
//                 },
//                 "name" : "GET: /api/v1/{entityType}/{id}"
//             },
//             "mappings" : {
//                 "requestBodyMapping" : {

//                 },
//                 "pathParamMapping" : {
//                     "entityType" : "User",
//                     "id" : "$$USERID"
//                 },
//                 "headerMapping" : {

//                 }
//             },
//             "name" : "GET: /api/v1/{entityType}/{id}"
//         },
//         {
//             "apiConfigDefinition" : {
//                 "apiReferenceId" : "63bea25730c49e00077b54e4",
//                 "apiConfigReference" : {
//                     "serviceName" : "Ninjapay Services",
//                     "verb" : "POST",
//                     "url" : "/ninjapay/api/v1/bnpl/realms/{realmId}/users/{userId}/onboarding/status"
//                 },
//                 "name" : "update-liquiloans-status"
//             },
//             "mappings" : {
//                 "requestBodyMapping" : {
//                     "userId" : "$.auto-approve-liquiloans-bnpl-loan[4][0].User.id",
//                     "realmId" : "$.auto-approve-liquiloans-bnpl-loan[4][0].User.primaryRealm",
//                     "phoneNumber" : "$.auto-approve-liquiloans-bnpl-loan[4][0].User.primaryPhoneNumber",
//                     "status" : "ACTIVE"
//                 },
//                 "pathParamMapping" : {
//                     "userId" : "$.auto-approve-liquiloans-bnpl-loan[4][0].User.id",
//                     "realmId" : "$.auto-approve-liquiloans-bnpl-loan[4][0].User.primaryRealm"
//                 }
//             },
//             "name" : "update-liquiloans-status"
//         }
//     ],
//     "responseDefinition" : {
//         "responseMapping" : {
//             "0" : "$.auto-approve-liquiloans-bnpl-loan[0]",
//             "1" : "$.auto-approve-liquiloans-bnpl-loan[1]",
//             "2" : "$.auto-approve-liquiloans-bnpl-loan[2]",
//             "3" : "$.auto-approve-liquiloans-bnpl-loan[3]",
//             "4" : "$.auto-approve-liquiloans-bnpl-loan[4]",
//             "5" : "$.auto-approve-liquiloans-bnpl-loan[5]",
//             "message" : "approved loan and updated LiquiLoans status to ACTIVE",
//             "externalId" : "$.auto-approve-liquiloans-bnpl-loan[1].data.externalId",
//             "approvedOnDate" : "$.auto-approve-liquiloans-bnpl-loan[1]['data']['expectedDisbursementDate']",
//             "approvedLoanAmount" : "$.auto-approve-liquiloans-bnpl-loan[1]['data']['allowedLimit']",
//             "expectedDisbursementDate" : "$.auto-approve-liquiloans-bnpl-loan[1]['data']['expectedDisbursementDate']"
//         }
//     },
//     "active" : true,
//     "realmId" : "dd180bca-465a-470a-abe4-9d5a15ded551",
//     "nameVersion" : "auto-approve-liquiloans-bnpl-loan_1",
//     "tags" : [
//         "ninjapay"
//     ],
//     "name" : "auto-approve-liquiloans-bnpl-loan",
//     "_class" : "com.ninjacart.wf.infra.adapters.domains.configuration.entities.ServiceConfigEntity"
// }


const data = {
  apiComponentList: [
    {
      apiConfigDefinition: {
        name: "PUT: /api/v1/realm/{realmId}/user/{userId}/loans/additionalInfo",
        version: 1,
        apiConfigReference: {
          serviceName: "Fintech LSP Service",
          verb: "PUT",
          url: "/api/v1/realm/{realmId}/user/{userId}/loans/additionalInfo",
        },
      },
      mappings: {
        requestBodyMapping: {
          loanId: "$.input.loanId",
          refType: "$.input.refType",
          refId: "$.input.refId",
        },
        pathParamMapping: {
          userId: "$$USERID",
          realmId: "$$REALM_ID",
        },
      },
      name: "update-loan-additional-info",
      version: 1,
    },
    {
      apiConfigDefinition: {
        apiConfigReference: {
          serviceName: "Fintech LSP Service",
          verb: "GET",
          url: "/api/v1/realm/{realmId}/user/{userId}/loans/{loanId}",
        },
        name: "GET: /api/v1/realm/{realmId}/user/{userId}/loans/{loanId}",
        version: 1,
      },
      mappings: {
        pathParamMapping: {
          realmId: "ninjacart",
          userId: "$$USERID",
          loanId: "$.input.loanId",
        },
        headerMapping: {},
        requestBodyMapping: {},
      },
      name: "get-all-loans",
      version: 1,
    },
    {
      mappings: {
        pathParamMapping: {
          loanId:
            "$.auto-approve-liquiloans-bnpl-loan[1]['data']['externalId']",
        },
        requestBodyMapping: {
          __SELF: {
            approvedOnDate:
              "$.auto-approve-liquiloans-bnpl-loan[1]['data']['submittedOnDate']",
            approvedLoanAmount:
              "$.auto-approve-liquiloans-bnpl-loan[1]['data']['allowedLimit']",
            expectedDisbursementDate:
              "$.auto-approve-liquiloans-bnpl-loan[1]['data']['expectedDisbursementDate']",
            note: "approving loan",
            locale: "en",
            dateFormat: "dd-MM-yyyy",
          },
        },
      },
      apiConfigDefinition: {
        name: "approve-loan-by-id",
        version: 1,
        apiConfigReference: {
          serviceName: "NC LSP Gateway Service",
          verb: "POST",
          url: "/api/loans/{loanId}/approve",
        },
      },
      name: "approve-loan-by-id",
      version: 1,
    },
    {
      mappings: {
        pathParamMapping: {
          commandId: "$.auto-approve-liquiloans-bnpl-loan[2]['commandId']",
        },
      },
      runtimeConfig: {
        continueOnError: true,
      },
      ruleConfigIdentifierDefinition: {
        name: "convertToApproveLoan",
        version: "1",
        evaluationMode: "CONTINUOUS",
        expressions: [
          {
            type: "CONDITIONAL",
            rhs: "{{$.auto-approve-liquiloans-bnpl-loan[2].commandId}} !=null",
          },
        ],
      },
      apiConfigDefinition: {
        name: "approve-maker-checker",
        version: 1,
        apiConfigReference: {
          serviceName: "NC LSP Gateway Service",
          verb: "POST",
          url: "/api/makercheckers/{commandId}/approve",
        },
      },
      name: "approve-maker-checker",
      version: 1,
    },
    {
      apiConfigDefinition: {
        apiConfigReference: {
          serviceName: "workflow-service-config-run",
          verb: "POST",
          url: "/{realmId}/{userId}/v1/execution/service/run/{serviceConfigName}",
        },
        name: "trader-realm-status-v1",
        version: 1,
      },
      mappings: {
        requestBodyMapping: {
          input: {
            userId: "$$USERID",
          },
        },
        pathParamMapping: {
          userId: "$$USERID",
          realmId: "$$REALM_ID",
          serviceConfigName: "trader-realm-status-v1",
        },
      },
      runtimeConfig: {
        continueOnError: true,
      },
      name: "trader-realm-status-v1",
      version: 1,
    },
    {
      apiConfigDefinition: {
        apiConfigReference: {
          serviceName: "Ninjapay Services",
          verb: "POST",
          url: "/ninjapay/api/v1/bnpl/realms/{realmId}/users/{userId}/onboarding/status",
        },
        name: "update-liquiloans-status",
        version: 1,
      },
      mappings: {
        pathParamMapping: {
          userId: "$$USERID",
          realmId: "$$REALM_ID",
        },
        requestBodyMapping: {
          userId: "$$USERID",
          realmId: "$$REALM_ID",
          phoneNumber:
            "$.auto-approve-liquiloans-bnpl-loan[4].data.primaryRealm.contactNumber",
          status: "ACTIVE",
        },
      },
      name: "update-liquiloans-status",
      version: 1,
    },
  ],
  responseDefinition: {
    responseMapping: {
      0: "$.auto-approve-liquiloans-bnpl-loan[0]",
      1: "$.auto-approve-liquiloans-bnpl-loan[1]",
      2: "$.auto-approve-liquiloans-bnpl-loan[2]",
      3: "$.auto-approve-liquiloans-bnpl-loan[3]",
      4: "$.auto-approve-liquiloans-bnpl-loan[4]",
      5: "$.auto-approve-liquiloans-bnpl-loan[5]",
      message: "approved loan and updated LiquiLoans status to ACTIVE",
      externalId: "$.auto-approve-liquiloans-bnpl-loan[1].data.externalId",
      approvedOnDate:
        "$.auto-approve-liquiloans-bnpl-loan[1]['data']['expectedDisbursementDate']",
      approvedLoanAmount:
        "$.auto-approve-liquiloans-bnpl-loan[1]['data']['allowedLimit']",
      expectedDisbursementDate:
        "$.auto-approve-liquiloans-bnpl-loan[1]['data']['expectedDisbursementDate']",
    },
  },
  name: "auto-approve-liquiloans-bnpl-loan",
  version: 1,
  active: true,
};

const data1 = {
  _id: "6344b7cdaa8238749cfdde0e",
  apiComponentList: [
    {
      apiConfigDefinition: {
        apiReferenceId: "63c0988f30c49e00077b54eb",
        apiConfigReference: {
          serviceName: "Ninjacart Asgard Microservice",
          verb: "POST",
          url: "/{realmId}/users/signUp",
        },
        name: "trader-signup",
        version: 1,
      },
      mappings: {
        requestBodyMapping: {
          contactNumber: "$.input.contactNumber",
          roles: "TRADER",
          skipTraderCreation: true,
        },
        pathParamMapping: {
          realmId: "$$REALM_ID",
        },
      },
      name: "trader-signup",
      version: 1,
    },
    {
      apiConfigDefinition: {
        apiReferenceId: "637bcd08fb356922aa57be4d",
        apiConfigReference: {
          serviceName: "Ninjacart Profile Microservice",
          verb: "GET",
          url: "/asgardUserRealmMap/userRealms/{userId}",
        },
        name: "find-user-realms",
        version: 1,
      },
      mappings: {
        requestBodyMapping: {},
        pathParamMapping: {
          userId: "$.save-party-create-realm[0].data.userId",
        },
      },
      name: "find-user-realms",
      version: 1,
    },
    {
      apiConfigDefinition: {
        apiReferenceId: "628b65517c612d2dbfd43320",
        apiConfigReference: {
          serviceName: "Ninjacart Contacts Microservice",
          verb: "POST",
          url: "/{realmId}/{userId}/party",
        },
        name: "save-party",
        version: 1,
      },
      mappings: {
        requestBodyMapping: {
          address: "$.input.address",
          balance: "$.input.balance",
          contactNumber: "$.input.contactNumber",
          gstNo: "$.input.gstNo",
          partyName: "$.input.partyName",
          partyUserId: "$.input.partyUserId",
          partyOfUserId: "$$USERID",
          creditDays: "$.input.creditDays",
        },
        pathParamMapping: {
          userId: "$$USERID",
          realmId: "$$REALM_ID",
        },
      },
      ruleConfigIdentifierDefinition: {
        evaluationMode: "CONTINUOUS",
        expressions: [
          {
            type: "EXPRESSION",
            lhs: "$.input.partyUserId",
            rhs: "{{$.save-party-create-realm[0].data.userId}}",
          },
          {
            type: "CONDITIONAL",
            rhs: "function.isNotEmpty({{$.save-party-create-realm[1].data}})",
          },
          {
            type: "EXPRESSION",
            lhs: "$.input.partyUserIds",
            rhs: "{{$.save-party-create-realm[1].data[?(@.role == 'OWNER')]['systemUserId']}}",
          },
          {
            type: "EXPRESSION",
            lhs: "$.input.partyUserId",
            rhs: "{{$.input.partyUserIds[0]}}",
          },
          {
            type: "EXPRESSION",
            lhs: "$.input.partyRealmIds",
            rhs: "{{$.save-party-create-realm[1].data[?(@.role == 'OWNER')]['realmIdentifier']}}",
          },
          {
            type: "EXPRESSION",
            lhs: "$.input.partyRealmId",
            rhs: "{{$.input.partyRealmIds[0]}}",
          },
        ],
        name: "save-party-create-realm-party-owner-user-realm",
        version: 1,
      },
      name: "save-party",
      version: 1,
    },
    {
      apiConfigDefinition: {
        apiReferenceId: "628b65517c612d2dbfd43320",
        apiConfigReference: {
          serviceName: "Ninjacart Contacts Microservice",
          verb: "POST",
          url: "/{realmId}/{userId}/party",
        },
        name: "save-party",
        version: 1,
      },
      mappings: {
        requestBodyMapping: {
          address: "$.input.address",
          balance: "$.input.balance",
          contactNumber: "$.input.contactNumber",
          gstNo: "$.input.gstNo",
          partyName: "$.input.partyName",
          partyUserId: "$.input.partyUserId",
          partyOfUserId: "$$USERID",
          creditDays: "$.input.creditDays",
        },
        pathParamMapping: {
          userId: "$$USERID",
          realmId: "$$REALM_ID",
        },
      },
      ruleConfigIdentifierDefinition: {
        evaluationMode: "CONTINUOUS",
        expressions: [
          {
            type: "CONDITIONAL",
            rhs: "function.isEmpty({{$.save-party-create-realm[1].data}})",
          },
          {
            type: "EXPRESSION",
            lhs: "$.input.partyRealmId",
            rhs: "'dd180bca-465a-470a-abe4-9d5a15ded551'",
          },
        ],
        name: "save-party-create-realm-party-owner-user-without-realm",
        version: 1,
      },
      name: "save-party",
      version: 1,
    },
    {
      apiConfigDefinition: {
        apiReferenceId: "637bcd08fb356922aa57be4d",
        apiConfigReference: {
          serviceName: "Ninjacart Profile Microservice",
          verb: "GET",
          url: "/asgardUserRealmMap/userRealms/{userId}",
        },
        name: "get-system-userId",
        version: 1,
      },
      mappings: {
        pathParamMapping: {
          userId: "$.input.partyUserId",
        },
      },
      name: "get-system-userId",
      version: 1,
    },
    {
      apiConfigDefinition: {
        apiReferenceId: "61e11e3b8886643872c964cd",
        apiConfigReference: {
          serviceName: "Ninjacart VAN Microservice",
          verb: "POST",
          url: "/{realm_id}/{userId}/account/virtualAccount",
        },
        name: "virtual-wallet-create",
        version: 1,
      },
      mappings: {
        requestBodyMapping: {
          ownerType: "SELF",
          userName: "$.input.partyName",
          contactNumber: "$.input.contactNumber",
        },
        pathParamMapping: {
          realm_id: "$.input.partyRealmId",
          userId: "$.save-party-create-realm[4].data[0].systemUserId",
        },
      },
      name: "virtual-wallet-create",
      version: 1,
    },
    {
      apiConfigDefinition: {
        apiReferenceId: "63bd5bb430c49e00077b54b5",
        apiConfigReference: {
          serviceName: "Ninjacart Ledger Microservice",
          verb: "POST",
          url: "/{realmId}/{userId}/account/bulkCreate",
        },
        name: "ledger-account-multiple-create",
        version: 1,
      },
      mappings: {
        requestBodyMapping: {
          accounts: [
            {
              accountName: "$.input.partyUserId",
              accountType: "ASSET",
            },
            {
              accountName: "$.input.partyUserId",
              accountType: "CASH",
            },
            {
              accountName: "$.input.partyUserId",
              accountType: "WALLET",
            },
          ],
        },
        pathParamMapping: {
          realmId: "$.input.partyRealmId",
          userId: "$.save-party-create-realm[4].data[0].systemUserId",
        },
      },
      name: "ledger-account-multiple-create",
      version: 1,
    },
    {
      apiConfigDefinition: {
        apiReferenceId: "62dc04ea9f5c65088c3e6bdf",
        apiConfigReference: {
          serviceName: "agnet-registry",
          verb: "POST",
          url: "/api/v1/{entityName}",
        },
        name: "registry-entity-create",
        version: 1,
      },
      mappings: {
        requestBodyMapping: {
          Realm: {
            contactDetails: {
              address: {
                locality: "$.input.address",
                pincode: "$.input.pincode",
              },
            },
            name: "$.input.partyName",
            primaryPhoneNumber: "$.input.contactNumber",
          },
        },
        pathParamMapping: {
          entityName: "Realm",
        },
        queryParamMapping: {},
      },
      name: "registry-entity-create",
      version: 1,
    },
  ],
  responseDefinition: {
    responseMapping: {
      userId: "$.input.partyUserId",
      partyIdLHS: "$.save-party-create-realm[2].data",
      partyIdRHS: "$.save-party-create-realm[3].data",
      "realm-details": "$.save-party-create-realm[7]",
    },
  },
  active: true,
  createdAt: "2022-10-11T00:24:45.184+0000",
  updatedAt: "2023-04-03T09:11:28.212+0000",
  createdBy: 1,
  updatedBy: 1,
  realmId: "dd180bca-465a-470a-abe4-9d5a15ded551",
  nameVersion: "save-party-create-realm_1",
  tags: ["vijaysunkari", "pg-workflow-configs", "savePartyCreateRealm"],
  name: "save-party-create-realm",
  version: 1,
  _class:
    "com.ninjacart.wf.infra.adapters.domains.configuration.entities.ServiceConfigEntity",
};

const data2 = {
    "_id" : "63fdf525aa761c3866ad5f4d",
    "apiComponentList" : [
        {
            "apiConfigDefinition" : {
                "apiReferenceId" : "638690fafb356927656761df",
                "apiConfigReference" : {
                    "serviceName" : "User Store Services",
                    "verb" : "GET",
                    "url" : "/api/v1/{entityType}/{id}"
                },
                "name" : "fetch-realm",
                "version" : 1
            },
            "mappings" : {
                "requestBodyMapping" : {

                },
                "pathParamMapping" : {
                    "entityType" : "Realm",
                    "id" : "$.input.contactNumber"
                },
                "queryParamMapping" : {
                    "idType" : "PHONE"
                }
            },
            "name" : "fetch-realm",
            "version" : 1
        },
        {
            "apiConfigDefinition" : {
                "apiReferenceId" : "638690fafb356927656761e0",
                "apiConfigReference" : {
                    "serviceName" : "User Store Services",
                    "verb" : "PUT",
                    "url" : "/api/v1/{entityType}/{id}"
                },
                "name" : "update-realm",
                "version" : 1
            },
            "mappings" : {
                "requestBodyMapping" : {
                    "Realm" : "$.add-additional-property-in-realm[0][0].Realm"
                },
                "pathParamMapping" : {
                    "entityType" : "Realm",
                    "id" : "$.add-additional-property-in-realm[0][0].Realm.id"
                },
                "queryParamMapping" : {

                }
            },
            "ruleConfigIdentifier" : {
                "name" : "modify-realm",
                "version" : 1
            },
            "name" : "update-realm",
            "version" : 1
        }
    ],
    "responseDefinition" : {
        "responseMapping" : {
            "Response" : "$.add-additional-property-in-realm[1]"
        }
    },
    "active" : true,
    "createdAt" : "2023-02-28T12:35:49.002+0000",
    "updatedAt" : "2023-04-03T14:47:17.670+0000",
    "createdBy" : 1,
    "updatedBy" : 1,
    "realmId" : "dd180bca-465a-470a-abe4-9d5a15ded551",
    "nameVersion" : "add-additional-property-in-realm_1",
    "tags" : [
        "agent",
        "add-additional-property-in-realm",
        "pipelines",
        "build",
        "atlassian"
    ],
    "name" : "add-additional-property-in-realm",
    "version" : 1,
    "_class" : "com.ninjacart.wf.infra.adapters.domains.configuration.entities.ServiceConfigEntity"
}

const data3 = 
  {
    "_id" : "6405885b93662820e71343e4",
    "apiComponentList" : [
        {
            "apiConfigDefinition" : {
                "apiReferenceId" : "635fcbd36c0bcffbaaa7c692",
                "apiConfigReference" : {
                    "serviceName" : "Fintech LSP Service",
                    "verb" : "PUT",
                    "url" : "/api/v1/realm/{realmId}/user/{userId}/loans/additionalInfo"
                },
                "name" : "PUT: /api/v1/realm/{realmId}/user/{userId}/loans/additionalInfo",
                "version" : 1
            },
            "mappings" : {
                "requestBodyMapping" : {
                    "loanId" : "$.input.loanId",
                    "refType" : "$.input.refType",
                    "refId" : "$.input.refId"
                },
                "pathParamMapping" : {
                    "userId" : "$$USERID",
                    "realmId" : "$$REALM_ID"
                }
            },
            "name" : "update-loan-additional-info",
            "version" : 1
        },
        {
            "apiConfigDefinition" : {
                "apiReferenceId" : "627cedc02bdccddad4e0f48c",
                "apiConfigReference" : {
                    "serviceName" : "Fintech LSP Service",
                    "verb" : "GET",
                    "url" : "/api/v1/realm/{realmId}/user/{userId}/loans/{loanId}"
                },
                "name" : "GET: /api/v1/realm/{realmId}/user/{userId}/loans/{loanId}",
                "version" : 1
            },
            "mappings" : {
                "requestBodyMapping" : {

                },
                "pathParamMapping" : {
                    "realmId" : "ninjacart",
                    "userId" : "$$USERID",
                    "loanId" : "$.input.loanId"
                },
                "headerMapping" : {

                }
            },
            "name" : "get-all-loans",
            "version" : 1
        },
        {
            "apiConfigDefinition" : {
                "apiReferenceId" : "6362296d6c0bcffbaaa7c6a7",
                "apiConfigReference" : {
                    "serviceName" : "NC LSP Gateway Service",
                    "verb" : "POST",
                    "url" : "/api/loans/{loanId}/approve"
                },
                "name" : "approve-loan-by-id",
                "version" : 1
            },
            "mappings" : {
                "requestBodyMapping" : {
                    "__SELF" : {
                        "approvedOnDate" : "$.auto-approve-loan[1]['data']['submittedOnDate']",
                        "approvedLoanAmount" : "$.auto-approve-loan[1]['data']['allowedLimit']",
                        "expectedDisbursementDate" : "$.auto-approve-loan[1]['data']['expectedDisbursementDate']",
                        "note" : "approving loan",
                        "locale" : "en",
                        "dateFormat" : "dd-MM-yyyy"
                    }
                },
                "pathParamMapping" : {
                    "loanId" : "$.auto-approve-loan[1]['data']['externalId']"
                }
            },
            "name" : "approve-loan-by-id",
            "version" : 1
        },
        {
            "apiConfigDefinition" : {
                "apiReferenceId" : "6362296d6c0bcffbaaa7c6ab",
                "apiConfigReference" : {
                    "serviceName" : "NC LSP Gateway Service",
                    "verb" : "POST",
                    "url" : "/api/makercheckers/{commandId}/approve"
                },
                "name" : "approve-maker-checker",
                "version" : 1
            },
            "mappings" : {
                "pathParamMapping" : {
                    "commandId" : "$.auto-approve-loan[2]['commandId']"
                }
            },
            "ruleConfigIdentifierDefinition" : {
                "evaluationMode" : "CONTINUOUS",
                "expressions" : [
                    {
                        "type" : "CONDITIONAL",
                        "rhs" : "{{$.auto-approve-loan[2].commandId}} !=null"
                    }
                ],
                "name" : "convertToApproveLoan",
                "version" : 1
            },
            "runtimeConfig" : {
                "continueOnError" : true
            },
            "name" : "approve-maker-checker",
            "version" : 1
        }
    ],
    "responseDefinition" : {
        "responseMapping" : {
            "0" : "$.auto-approve-loan[0]",
            "1" : "$.auto-approve-loan[1]",
            "2" : "$.auto-approve-loan[2]",
            "3" : "$.auto-approve-loan[3]",
            "message" : "LOAN APPROVED",
            "externalId" : "$.auto-approve-loan[1].data.externalId",
            "approvedOnDate" : "$.auto-approve-loan[1]['data']['expectedDisbursementDate']",
            "approvedLoanAmount" : "$.auto-approve-loan[1]['data']['allowedLimit']",
            "expectedDisbursementDate" : "$.auto-approve-loan[1]['data']['expectedDisbursementDate']"
        }
    },
    "active" : true,
    "createdAt" : "2023-03-06T06:29:47.308+0000",
    "updatedAt" : "2023-04-03T14:47:20.533+0000",
    "createdBy" : 1,
    "updatedBy" : 1,
    "realmId" : "dd180bca-465a-470a-abe4-9d5a15ded551",
    "nameVersion" : "auto-approve-loan_1",
    "tags" : [
        "agent",
        "pipelines",
        "build",
        "atlassian",
        "auto-approve-loan"
    ],
    "name" : "auto-approve-loan",
    "version" : 1,
    "_class" : "com.ninjacart.wf.infra.adapters.domains.configuration.entities.ServiceConfigEntity"

};



export default data2;