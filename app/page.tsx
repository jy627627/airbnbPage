import { ClientOnly } from "@/app/components/ClientOnly"
import { Container } from "@/app/components/Container"
import { EmptyState } from "@/app/components/EmptyState"
import { ListingCard } from "@/app/components/listings/ListingCard"

import getListings, { IListingsParams } from "@/app/actions/getListings"
import getCurrentUser from "@/app/actions/getCurrentUser"

interface HomeProps {
    searchParams: IListingsParams
}

export default async function Home({ searchParams }: HomeProps) {

    const listings = await getListings( searchParams )
    const currentUser = await getCurrentUser()


    if(listings.length === 0) {
        return (
            <ClientOnly>
               <EmptyState showReset/>
            </ClientOnly>
        )
    }

    return (
          // <div>hello abing</div>
        <ClientOnly>
            <Container>
                  <div
                    className="
                      pt-24
                      grid
                      sm:grid-cols-2
                      md:grid-cols-3
                      lg:grid-cols-4
                      xl:grid-cols-5
                      2xl:grid-cols-6
                      gap-8
                    "
                  >
                      {listings.map(i => {
                          return (
                              <ListingCard
                                  currentUser={ currentUser }
                                  key={ i.id }
                                  data={ i }
                              />
                          )
                      })}
                  </div>
            </Container>
        </ClientOnly>
    )
}
