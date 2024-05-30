export default function Home() {
    return (
        <div className="home">
            <h2>Welcome to the Payment Portal</h2>
            <p>So the FP will make the payments and the accounting team will pull reports and will reconcile the payments/accounts.  We will be working not with the vanilla UI that Braintree provides as we have some custom fields that need to be added that the Braintree payment system will process and apply for the transactions so the accounting department can reconcile them.  (If we used the Vanilla UI, we would be done within a week.)  So once we are done with the MVP of Braintree, we will pull from the backlog and will work on the items that are outside of the MVP, we may also work on items that aren’t related to Braintree.  
</p>
        </div>
    )
}