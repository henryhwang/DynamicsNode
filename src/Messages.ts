import {EntityReference} from "./CRMDataTypes";

export class WhoAmIRequest{
    public __typeName="Microsoft.Crm.Sdk.Proxy,Microsoft.Crm.Sdk.Messages.WhoAmIRequest";
}

/**
 * @class
 */
export class WhoAmIResponse{
    /** @member {string}
     * @class WhoAmIResponse
     */
    public BusinessUnitId:string;
    public OrganizationId:string;
    public UserId:string;
}

export class AssignRequest{
    public __typeName="Microsoft.Crm.Sdk.Proxy,Microsoft.Crm.Sdk.Messages.AssignRequest";
    public Assignee:EntityReference;
    public Target:EntityReference;    
}

export class AssignResponse{

}