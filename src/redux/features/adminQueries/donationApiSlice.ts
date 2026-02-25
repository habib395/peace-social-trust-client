
import { baseApi } from '../../baseApi';

export interface DonationRequest {
    name: string;
    aadhaad: string;
    email: string;
    fund: string;
    gateway: string;
    amount: string;
    transactionId: string;
}

export interface DonationResponse {
    success: boolean;
    message?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any;
}

export const donationApiSlice = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        sendDonation: builder.mutation<DonationResponse, DonationRequest>({
            query: (newDonation) => ({
                url: "donation/addUserDonation",
                method: "POST",
                body: newDonation,
            }),
            invalidatesTags: ["Donations", "Stats"]
        })
    })
})

export const { useSendDonationMutation } = donationApiSlice;