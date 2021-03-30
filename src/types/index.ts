export * from './enums';

export interface ITotalBalanceBTC {
    balance: string;
    balance_int: number;
    input_count: number;
    output_count: number;
    received: string;
    received_int: number;
    spent: string;
    spent_int: number;
    transaction_count: number;
}