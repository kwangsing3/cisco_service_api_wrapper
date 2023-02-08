export declare class ServiceOrderReturn {
    GETRMADetailsbyRMANumber(rma_numbers: number): Promise<any>;
    GETRMAsbyUserID(user_ids: string, fromDate?: string, toDate?: string, status?: 'open' | 'booked' | 'hold' | 'closed' | 'cancelled', sortBy?: 'orderdate' | 'status'): Promise<any>;
}
