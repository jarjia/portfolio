import { gql } from "@apollo/client";

export const FILMS_QUERY = gql`
{
    data {
        login
    }
}
`;