import "../style/BookingConfirmation.css";


type BookingConfirmationProps = {
    email: string;
    startDate: string;
    endDate: string;
    days: number;
    totalPrice: number;
}

export default function BookingConfirmation({
  email = "namn@exempel.se",
  startDate = "10 september 2026",
  endDate = "15 september 2026",
  days = 5,
  totalPrice = 3500,
}: Partial<BookingConfirmationProps>){
    return(

    )
}