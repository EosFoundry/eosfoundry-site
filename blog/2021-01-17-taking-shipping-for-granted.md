---
slug: "taking-shipping-for-granted"
authors: james
date: "2021-01-27"
title: Taking Shipping for Granted
---

Amazon prime is a blessing and a curse. Being able to order something, pay the ticket price (plus a reasonably monthly subscription), and have it shipped to my door within a day or two has the effect of burying the complexities of making that system happen. Getting the shipping process for the MakeShift Alpha set up (and to be clear, it's still not done at the time of writing!) has really shown me how complicated shipping is for both a business and its customers.

## Setting the Scene

Shipping really is a volume-first process. Sending a single MakeShift out can cost anywhere between \$15 to \$80. I imagine that for most people out there, that is a frankly ridiculous amount to pay extra for a thing that already costs as much as a week's worth of transportation or groceries.

However that would have been the case for anyone trying to send a single small parcel outside of their local municipality or state.

So our options were basically:

1) deal with it
2) suck it up and deal with it

What we want to do, however, is get everyone who's ordering a reasonable shipping rate that won't take months by ocean, and will not cost more than half what the darn thing is worth.

## Building a Checkout

For the Alpha, Eos won't actually be making any noticeable profit at all. The price of the MakeShift Alpha is set at cost of components (even throwing in free assembly!). If it didn't sink Eos's finances, the Alpha would have been costed at just the shipping. Ultimately the bill still comes out around $90 CAD, and that's an amount of money that requires more formality than sending out a link to paypal or a donation service. The shipping addresses needed to be validated and safely stored - a donation link with a google form isn't going to cut it.

There's plenty of  'one-stop' ecommerce services out there, but all of them expect their clients to rely on them entirely for a digital storefront. This kind of solution doesn't really work with the Eos Foundry site - it's already set up to be a one-stop-shop for documentation, guides, and any digital shenanigans. Using such a service would mean setting up two entirely different sites - one for the store, and another for the documentation. Managing both is going to be more of a burden than a benefit in the long run. The MakeShift Alpha really just needs a 'buy this thing' button that links to a checkout, not an entire shop.

## Putting It All Together

So this is where the trouble starts. For the checkout, the criteria was to be as direct as possible:

- A button that links to an address form, then directly to checkout (easily done)
- The checkout includes the parts cost (not too tricky)
- The checkout includes a calculated shipping rate (!!!!!)

The last item really complicates things. There are supporters that want to get hold of the prototype from a number of international locations, and we want to make it happen.

## Shipping Isn't One-Size-Fits-All

Turns out one does not simply deal directly with carriers without an intermediary or a shipping plan - the only shipping options available were for very high reliability very fast parcel services that were *very* expensive. Only with a registered account do we even get to see what reasonable rates are available (if any).

This ends up being a problem because we don't have the option calling up every carrier for hours and rate checking between them - we'd rather just get back to work on the MakeShift.

Further complicating things is that there's entirely different shipping options between Canadian (domestic for us), US, and different international locations, each with different rates, with and without tracking. One answer is to just charge a flat rate, but we don't really have the data to know what flat rate to even charge - how much of our packages are going internationally can swing the rate up to $15 either way. Plus it would be pretty hypocritical if we say we're not actually making money but overcharge on shipping and skim off the top.

We want to be able to get people the thing, but not go nuts over managing it all.

Fortunately we have found with carrier discounts that we can actually grab data from, and put that into the checkout that we're building - this is where we're at right now, working on hooking up the auto-shipping calculator into the checkout so everyone can get a (hopefully) reasonable shipping price.
