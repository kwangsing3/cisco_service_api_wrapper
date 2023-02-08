export declare class Case {
    GetCaseSummary(case_ids: string, sort_by?: 'UPDATED_DATE' | 'STATUS'): Promise<any>;
    GetCaseDetails(case_ids: string): Promise<any>;
    GetCaseByContractID(contract_ids: string, date_created_from?: string, date_created_to?: string, status_flag?: 'O' | 'C', sort_by?: 'UPDATED_DATE' | 'STATUS', page_index?: number): Promise<any>;
    GetCaseByUserID(user_ids: string, date_created_from?: string, date_created_to?: string, status_flag?: 'O' | 'C', sort_by?: 'UPDATED_DATE' | 'STATUS', page_index?: number): Promise<any>;
}
