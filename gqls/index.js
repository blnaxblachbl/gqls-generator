import { gql } from "@apollo/client"

export const ADMIN = gql`
	query {
		admin{
			id
			createdAt
			updatedAt
			email
		}
	}
`
export const FIND_ONE_ADMIN = gql`
	query (
		$where:AdminWhereUniqueInput!
	){
		findOneAdmin(
			where: $where
		){
			id
			createdAt
			updatedAt
			email
		}
	}
`
export const FIND_FIRST_ADMIN = gql`
	query (
		$where:AdminWhereInput
		$orderBy:[AdminOrderByInput!]
		$cursor:AdminWhereUniqueInput
		$distinct:AdminDistinctFieldEnum
		$skip:Int
		$take:Int
	){
		findFirstAdmin(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			distinct: $distinct
			skip: $skip
			take: $take
		){
			id
			createdAt
			updatedAt
			email
		}
	}
`
export const FIND_MANY_ADMIN = gql`
	query (
		$where:AdminWhereInput
		$orderBy:[AdminOrderByInput!]
		$cursor:AdminWhereUniqueInput
		$distinct:AdminDistinctFieldEnum
		$skip:Int
		$take:Int
	){
		findManyAdmin(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			distinct: $distinct
			skip: $skip
			take: $take
		){
			id
			createdAt
			updatedAt
			email
		}
	}
`
export const FIND_MANY_ADMIN_COUNT = gql`
	query (
		$where:AdminWhereInput
		$orderBy:[AdminOrderByInput!]
		$cursor:AdminWhereUniqueInput
		$distinct:AdminDistinctFieldEnum
		$skip:Int
		$take:Int
	){
		findManyAdminCount(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			distinct: $distinct
			skip: $skip
			take: $take
		)
	}
`
export const AGGREGATE_ADMIN = gql`
	query (
		$where:AdminWhereInput
		$orderBy:[AdminOrderByInput!]
		$cursor:AdminWhereUniqueInput
		$distinct:AdminDistinctFieldEnum
		$skip:Int
		$take:Int
	){
		aggregateAdmin(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			distinct: $distinct
			skip: $skip
			take: $take
		){
			count
		}
	}
`
export const USER = gql`
	query {
		user{
			id
			createdAt
			updatedAt
			name
			phone
			tickets{
				id
				createdAt
				updatedAt
				number
				code
				edition{
					id
					createdAt
					updatedAt
					number
					name
					lotteryId
				}			
				editionId
				user{
					id
					createdAt
					updatedAt
					name
					phone
				}			
				userId
			}		
		}
	}
`
export const FIND_ONE_USER = gql`
	query (
		$where:UserWhereUniqueInput!
	){
		findOneUser(
			where: $where
		){
			id
			createdAt
			updatedAt
			name
			phone
			tickets{
				id
				createdAt
				updatedAt
				number
				code
				edition{
					id
					createdAt
					updatedAt
					number
					name
					lotteryId
				}			
				editionId
				user{
					id
					createdAt
					updatedAt
					name
					phone
				}			
				userId
			}		
		}
	}
`
export const FIND_FIRST_USER = gql`
	query (
		$where:UserWhereInput
		$orderBy:[UserOrderByInput!]
		$cursor:UserWhereUniqueInput
		$distinct:UserDistinctFieldEnum
		$skip:Int
		$take:Int
	){
		findFirstUser(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			distinct: $distinct
			skip: $skip
			take: $take
		){
			id
			createdAt
			updatedAt
			name
			phone
			tickets{
				id
				createdAt
				updatedAt
				number
				code
				edition{
					id
					createdAt
					updatedAt
					number
					name
					lotteryId
				}			
				editionId
				user{
					id
					createdAt
					updatedAt
					name
					phone
				}			
				userId
			}		
		}
	}
`
export const FIND_MANY_USER = gql`
	query (
		$where:UserWhereInput
		$orderBy:[UserOrderByInput!]
		$cursor:UserWhereUniqueInput
		$distinct:UserDistinctFieldEnum
		$skip:Int
		$take:Int
	){
		findManyUser(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			distinct: $distinct
			skip: $skip
			take: $take
		){
			id
			createdAt
			updatedAt
			name
			phone
			tickets{
				id
				createdAt
				updatedAt
				number
				code
				edition{
					id
					createdAt
					updatedAt
					number
					name
					lotteryId
				}			
				editionId
				user{
					id
					createdAt
					updatedAt
					name
					phone
				}			
				userId
			}		
		}
	}
`
export const FIND_MANY_USER_COUNT = gql`
	query (
		$where:UserWhereInput
		$orderBy:[UserOrderByInput!]
		$cursor:UserWhereUniqueInput
		$distinct:UserDistinctFieldEnum
		$skip:Int
		$take:Int
	){
		findManyUserCount(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			distinct: $distinct
			skip: $skip
			take: $take
		)
	}
`
export const AGGREGATE_USER = gql`
	query (
		$where:UserWhereInput
		$orderBy:[UserOrderByInput!]
		$cursor:UserWhereUniqueInput
		$distinct:UserDistinctFieldEnum
		$skip:Int
		$take:Int
	){
		aggregateUser(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			distinct: $distinct
			skip: $skip
			take: $take
		){
			count
		}
	}
`
export const FIND_ONE_LOTTERY = gql`
	query (
		$where:LotteryWhereUniqueInput!
	){
		findOneLottery(
			where: $where
		){
			id
			createdAt
			deadline
			updatedAt
			name
			description
			editions{
				id
				createdAt
				updatedAt
				number
				name
				tickets{
					id
					createdAt
					updatedAt
					number
					code
					editionId
					userId
				}			
				lottery{
					id
					createdAt
					deadline
					updatedAt
					name
					description
				}			
				lotteryId
			}		
		}
	}
`
export const FIND_FIRST_LOTTERY = gql`
	query (
		$where:LotteryWhereInput
		$orderBy:[LotteryOrderByInput!]
		$cursor:LotteryWhereUniqueInput
		$distinct:LotteryDistinctFieldEnum
		$skip:Int
		$take:Int
	){
		findFirstLottery(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			distinct: $distinct
			skip: $skip
			take: $take
		){
			id
			createdAt
			deadline
			updatedAt
			name
			description
			editions{
				id
				createdAt
				updatedAt
				number
				name
				tickets{
					id
					createdAt
					updatedAt
					number
					code
					editionId
					userId
				}			
				lottery{
					id
					createdAt
					deadline
					updatedAt
					name
					description
				}			
				lotteryId
			}		
		}
	}
`
export const FIND_MANY_LOTTERY = gql`
	query (
		$where:LotteryWhereInput
		$orderBy:[LotteryOrderByInput!]
		$cursor:LotteryWhereUniqueInput
		$distinct:LotteryDistinctFieldEnum
		$skip:Int
		$take:Int
	){
		findManyLottery(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			distinct: $distinct
			skip: $skip
			take: $take
		){
			id
			createdAt
			deadline
			updatedAt
			name
			description
			editions{
				id
				createdAt
				updatedAt
				number
				name
				tickets{
					id
					createdAt
					updatedAt
					number
					code
					editionId
					userId
				}			
				lottery{
					id
					createdAt
					deadline
					updatedAt
					name
					description
				}			
				lotteryId
			}		
		}
	}
`
export const FIND_MANY_LOTTERY_COUNT = gql`
	query (
		$where:LotteryWhereInput
		$orderBy:[LotteryOrderByInput!]
		$cursor:LotteryWhereUniqueInput
		$distinct:LotteryDistinctFieldEnum
		$skip:Int
		$take:Int
	){
		findManyLotteryCount(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			distinct: $distinct
			skip: $skip
			take: $take
		)
	}
`
export const AGGREGATE_LOTTERY = gql`
	query (
		$where:LotteryWhereInput
		$orderBy:[LotteryOrderByInput!]
		$cursor:LotteryWhereUniqueInput
		$distinct:LotteryDistinctFieldEnum
		$skip:Int
		$take:Int
	){
		aggregateLottery(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			distinct: $distinct
			skip: $skip
			take: $take
		){
			count
		}
	}
`
export const FIND_ONE_EDITION = gql`
	query (
		$where:EditionWhereUniqueInput!
	){
		findOneEdition(
			where: $where
		){
			id
			createdAt
			updatedAt
			number
			name
			tickets{
				id
				createdAt
				updatedAt
				number
				code
				edition{
					id
					createdAt
					updatedAt
					number
					name
					lotteryId
				}			
				editionId
				user{
					id
					createdAt
					updatedAt
					name
					phone
				}			
				userId
			}		
			lottery{
				id
				createdAt
				deadline
				updatedAt
				name
				description
				editions{
					id
					createdAt
					updatedAt
					number
					name
					lotteryId
				}			
			}		
			lotteryId
		}
	}
`
export const FIND_FIRST_EDITION = gql`
	query (
		$where:EditionWhereInput
		$orderBy:[EditionOrderByInput!]
		$cursor:EditionWhereUniqueInput
		$distinct:EditionDistinctFieldEnum
		$skip:Int
		$take:Int
	){
		findFirstEdition(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			distinct: $distinct
			skip: $skip
			take: $take
		){
			id
			createdAt
			updatedAt
			number
			name
			tickets{
				id
				createdAt
				updatedAt
				number
				code
				edition{
					id
					createdAt
					updatedAt
					number
					name
					lotteryId
				}			
				editionId
				user{
					id
					createdAt
					updatedAt
					name
					phone
				}			
				userId
			}		
			lottery{
				id
				createdAt
				deadline
				updatedAt
				name
				description
				editions{
					id
					createdAt
					updatedAt
					number
					name
					lotteryId
				}			
			}		
			lotteryId
		}
	}
`
export const FIND_MANY_EDITION = gql`
	query (
		$where:EditionWhereInput
		$orderBy:[EditionOrderByInput!]
		$cursor:EditionWhereUniqueInput
		$distinct:EditionDistinctFieldEnum
		$skip:Int
		$take:Int
	){
		findManyEdition(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			distinct: $distinct
			skip: $skip
			take: $take
		){
			id
			createdAt
			updatedAt
			number
			name
			tickets{
				id
				createdAt
				updatedAt
				number
				code
				edition{
					id
					createdAt
					updatedAt
					number
					name
					lotteryId
				}			
				editionId
				user{
					id
					createdAt
					updatedAt
					name
					phone
				}			
				userId
			}		
			lottery{
				id
				createdAt
				deadline
				updatedAt
				name
				description
				editions{
					id
					createdAt
					updatedAt
					number
					name
					lotteryId
				}			
			}		
			lotteryId
		}
	}
`
export const FIND_MANY_EDITION_COUNT = gql`
	query (
		$where:EditionWhereInput
		$orderBy:[EditionOrderByInput!]
		$cursor:EditionWhereUniqueInput
		$distinct:EditionDistinctFieldEnum
		$skip:Int
		$take:Int
	){
		findManyEditionCount(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			distinct: $distinct
			skip: $skip
			take: $take
		)
	}
`
export const AGGREGATE_EDITION = gql`
	query (
		$where:EditionWhereInput
		$orderBy:[EditionOrderByInput!]
		$cursor:EditionWhereUniqueInput
		$distinct:EditionDistinctFieldEnum
		$skip:Int
		$take:Int
	){
		aggregateEdition(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			distinct: $distinct
			skip: $skip
			take: $take
		){
			count
			avg{
				number
			}		
			sum{
				number
			}		
			min{
				number
			}		
			max{
				number
			}		
		}
	}
`
export const FIND_ONE_TICKET = gql`
	query (
		$where:TicketWhereUniqueInput!
	){
		findOneTicket(
			where: $where
		){
			id
			createdAt
			updatedAt
			number
			code
			edition{
				id
				createdAt
				updatedAt
				number
				name
				tickets{
					id
					createdAt
					updatedAt
					number
					code
					editionId
					userId
				}			
				lottery{
					id
					createdAt
					deadline
					updatedAt
					name
					description
				}			
				lotteryId
			}		
			editionId
			user{
				id
				createdAt
				updatedAt
				name
				phone
				tickets{
					id
					createdAt
					updatedAt
					number
					code
					editionId
					userId
				}			
			}		
			userId
		}
	}
`
export const FIND_FIRST_TICKET = gql`
	query (
		$where:TicketWhereInput
		$orderBy:[TicketOrderByInput!]
		$cursor:TicketWhereUniqueInput
		$distinct:TicketDistinctFieldEnum
		$skip:Int
		$take:Int
	){
		findFirstTicket(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			distinct: $distinct
			skip: $skip
			take: $take
		){
			id
			createdAt
			updatedAt
			number
			code
			edition{
				id
				createdAt
				updatedAt
				number
				name
				tickets{
					id
					createdAt
					updatedAt
					number
					code
					editionId
					userId
				}			
				lottery{
					id
					createdAt
					deadline
					updatedAt
					name
					description
				}			
				lotteryId
			}		
			editionId
			user{
				id
				createdAt
				updatedAt
				name
				phone
				tickets{
					id
					createdAt
					updatedAt
					number
					code
					editionId
					userId
				}			
			}		
			userId
		}
	}
`
export const FIND_MANY_TICKET = gql`
	query (
		$where:TicketWhereInput
		$orderBy:[TicketOrderByInput!]
		$cursor:TicketWhereUniqueInput
		$distinct:TicketDistinctFieldEnum
		$skip:Int
		$take:Int
	){
		findManyTicket(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			distinct: $distinct
			skip: $skip
			take: $take
		){
			id
			createdAt
			updatedAt
			number
			code
			edition{
				id
				createdAt
				updatedAt
				number
				name
				tickets{
					id
					createdAt
					updatedAt
					number
					code
					editionId
					userId
				}			
				lottery{
					id
					createdAt
					deadline
					updatedAt
					name
					description
				}			
				lotteryId
			}		
			editionId
			user{
				id
				createdAt
				updatedAt
				name
				phone
				tickets{
					id
					createdAt
					updatedAt
					number
					code
					editionId
					userId
				}			
			}		
			userId
		}
	}
`
export const FIND_MANY_TICKET_COUNT = gql`
	query (
		$where:TicketWhereInput
		$orderBy:[TicketOrderByInput!]
		$cursor:TicketWhereUniqueInput
		$distinct:TicketDistinctFieldEnum
		$skip:Int
		$take:Int
	){
		findManyTicketCount(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			distinct: $distinct
			skip: $skip
			take: $take
		)
	}
`
export const AGGREGATE_TICKET = gql`
	query (
		$where:TicketWhereInput
		$orderBy:[TicketOrderByInput!]
		$cursor:TicketWhereUniqueInput
		$distinct:TicketDistinctFieldEnum
		$skip:Int
		$take:Int
	){
		aggregateTicket(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			distinct: $distinct
			skip: $skip
			take: $take
		){
			count
			avg{
				number
			}		
			sum{
				number
			}		
			min{
				number
			}		
			max{
				number
			}		
		}
	}
`
export const FIND_ONE_NEWS = gql`
	query (
		$where:NewsWhereUniqueInput!
	){
		findOneNews(
			where: $where
		){
			id
			createdAt
			updatedAt
			name
			content
		}
	}
`
export const FIND_FIRST_NEWS = gql`
	query (
		$where:NewsWhereInput
		$orderBy:[NewsOrderByInput!]
		$cursor:NewsWhereUniqueInput
		$distinct:NewsDistinctFieldEnum
		$skip:Int
		$take:Int
	){
		findFirstNews(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			distinct: $distinct
			skip: $skip
			take: $take
		){
			id
			createdAt
			updatedAt
			name
			content
		}
	}
`
export const FIND_MANY_NEWS = gql`
	query (
		$where:NewsWhereInput
		$orderBy:[NewsOrderByInput!]
		$cursor:NewsWhereUniqueInput
		$distinct:NewsDistinctFieldEnum
		$skip:Int
		$take:Int
	){
		findManyNews(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			distinct: $distinct
			skip: $skip
			take: $take
		){
			id
			createdAt
			updatedAt
			name
			content
		}
	}
`
export const FIND_MANY_NEWS_COUNT = gql`
	query (
		$where:NewsWhereInput
		$orderBy:[NewsOrderByInput!]
		$cursor:NewsWhereUniqueInput
		$distinct:NewsDistinctFieldEnum
		$skip:Int
		$take:Int
	){
		findManyNewsCount(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			distinct: $distinct
			skip: $skip
			take: $take
		)
	}
`
export const AGGREGATE_NEWS = gql`
	query (
		$where:NewsWhereInput
		$orderBy:[NewsOrderByInput!]
		$cursor:NewsWhereUniqueInput
		$distinct:NewsDistinctFieldEnum
		$skip:Int
		$take:Int
	){
		aggregateNews(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			distinct: $distinct
			skip: $skip
			take: $take
		){
			count
		}
	}
`
export const FIND_ONE_PARTNER = gql`
	query (
		$where:PartnerWhereUniqueInput!
	){
		findOnePartner(
			where: $where
		){
			id
			createdAt
			updatedAt
			name
			description
			logo
			url
		}
	}
`
export const FIND_FIRST_PARTNER = gql`
	query (
		$where:PartnerWhereInput
		$orderBy:[PartnerOrderByInput!]
		$cursor:PartnerWhereUniqueInput
		$distinct:PartnerDistinctFieldEnum
		$skip:Int
		$take:Int
	){
		findFirstPartner(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			distinct: $distinct
			skip: $skip
			take: $take
		){
			id
			createdAt
			updatedAt
			name
			description
			logo
			url
		}
	}
`
export const FIND_MANY_PARTNER = gql`
	query (
		$where:PartnerWhereInput
		$orderBy:[PartnerOrderByInput!]
		$cursor:PartnerWhereUniqueInput
		$distinct:PartnerDistinctFieldEnum
		$skip:Int
		$take:Int
	){
		findManyPartner(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			distinct: $distinct
			skip: $skip
			take: $take
		){
			id
			createdAt
			updatedAt
			name
			description
			logo
			url
		}
	}
`
export const FIND_MANY_PARTNER_COUNT = gql`
	query (
		$where:PartnerWhereInput
		$orderBy:[PartnerOrderByInput!]
		$cursor:PartnerWhereUniqueInput
		$distinct:PartnerDistinctFieldEnum
		$skip:Int
		$take:Int
	){
		findManyPartnerCount(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			distinct: $distinct
			skip: $skip
			take: $take
		)
	}
`
export const AGGREGATE_PARTNER = gql`
	query (
		$where:PartnerWhereInput
		$orderBy:[PartnerOrderByInput!]
		$cursor:PartnerWhereUniqueInput
		$distinct:PartnerDistinctFieldEnum
		$skip:Int
		$take:Int
	){
		aggregatePartner(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			distinct: $distinct
			skip: $skip
			take: $take
		){
			count
		}
	}
`
export const SIGN_IN_ADMIN = gql`
	mutation (
		$data:SignInAdminInput!
	){
		signInAdmin(
			data: $data
		)
	}
`
export const FORGOT_ADMIN = gql`
	mutation (
		$data:ForgotAdminInput!
	){
		forgotAdmin(
			data: $data
		)
	}
`
export const REFRESH_ADMIN = gql`
	mutation {
		refreshAdmin
	}
`
export const UPDATE_ONE_ADMIN = gql`
	mutation (
		$where:AdminWhereUniqueInput!
		$data:AdminUpdateInput!
	){
		updateOneAdmin(
			where: $where
			data: $data
		){
			id
			createdAt
			updatedAt
			email
		}
	}
`
export const SIGN_IN_USER = gql`
	mutation (
		$data:SignInUserInput!
	){
		signInUser(
			data: $data
		)
	}
`
export const SIGN_IN_CONFIRM_USER = gql`
	mutation (
		$data:SignInConfirmUserInput!
	){
		signInConfirmUser(
			data: $data
		){
			user{
				id
				createdAt
				updatedAt
				name
				phone
				tickets{
					id
					createdAt
					updatedAt
					number
					code
					editionId
					userId
				}			
			}		
			token
		}
	}
`
export const REFRESH_USER = gql`
	mutation {
		refreshUser
	}
`
export const CREATE_ONE_USER = gql`
	mutation (
		$data:UserCreateInput!
	){
		createOneUser(
			data: $data
		){
			id
			createdAt
			updatedAt
			name
			phone
			tickets{
				id
				createdAt
				updatedAt
				number
				code
				edition{
					id
					createdAt
					updatedAt
					number
					name
					lotteryId
				}			
				editionId
				user{
					id
					createdAt
					updatedAt
					name
					phone
				}			
				userId
			}		
		}
	}
`
export const UPDATE_ONE_USER = gql`
	mutation (
		$where:UserWhereUniqueInput!
		$data:UserUpdateInput!
	){
		updateOneUser(
			where: $where
			data: $data
		){
			id
			createdAt
			updatedAt
			name
			phone
			tickets{
				id
				createdAt
				updatedAt
				number
				code
				edition{
					id
					createdAt
					updatedAt
					number
					name
					lotteryId
				}			
				editionId
				user{
					id
					createdAt
					updatedAt
					name
					phone
				}			
				userId
			}		
		}
	}
`
export const DELETE_ONE_USER = gql`
	mutation (
		$where:UserWhereUniqueInput!
	){
		deleteOneUser(
			where: $where
		){
			id
			createdAt
			updatedAt
			name
			phone
			tickets{
				id
				createdAt
				updatedAt
				number
				code
				edition{
					id
					createdAt
					updatedAt
					number
					name
					lotteryId
				}			
				editionId
				user{
					id
					createdAt
					updatedAt
					name
					phone
				}			
				userId
			}		
		}
	}
`
export const CREATE_ONE_LOTTERY = gql`
	mutation (
		$data:LotteryCreateInput!
	){
		createOneLottery(
			data: $data
		){
			id
			createdAt
			deadline
			updatedAt
			name
			description
			editions{
				id
				createdAt
				updatedAt
				number
				name
				tickets{
					id
					createdAt
					updatedAt
					number
					code
					editionId
					userId
				}			
				lottery{
					id
					createdAt
					deadline
					updatedAt
					name
					description
				}			
				lotteryId
			}		
		}
	}
`
export const UPDATE_ONE_LOTTERY = gql`
	mutation (
		$where:LotteryWhereUniqueInput!
		$data:LotteryUpdateInput!
	){
		updateOneLottery(
			where: $where
			data: $data
		){
			id
			createdAt
			deadline
			updatedAt
			name
			description
			editions{
				id
				createdAt
				updatedAt
				number
				name
				tickets{
					id
					createdAt
					updatedAt
					number
					code
					editionId
					userId
				}			
				lottery{
					id
					createdAt
					deadline
					updatedAt
					name
					description
				}			
				lotteryId
			}		
		}
	}
`
export const DELETE_ONE_LOTTERY = gql`
	mutation (
		$where:LotteryWhereUniqueInput!
	){
		deleteOneLottery(
			where: $where
		){
			id
			createdAt
			deadline
			updatedAt
			name
			description
			editions{
				id
				createdAt
				updatedAt
				number
				name
				tickets{
					id
					createdAt
					updatedAt
					number
					code
					editionId
					userId
				}			
				lottery{
					id
					createdAt
					deadline
					updatedAt
					name
					description
				}			
				lotteryId
			}		
		}
	}
`
export const CREATE_ONE_EDITION = gql`
	mutation (
		$data:EditionCreateInput!
	){
		createOneEdition(
			data: $data
		){
			id
			createdAt
			updatedAt
			number
			name
			tickets{
				id
				createdAt
				updatedAt
				number
				code
				edition{
					id
					createdAt
					updatedAt
					number
					name
					lotteryId
				}			
				editionId
				user{
					id
					createdAt
					updatedAt
					name
					phone
				}			
				userId
			}		
			lottery{
				id
				createdAt
				deadline
				updatedAt
				name
				description
				editions{
					id
					createdAt
					updatedAt
					number
					name
					lotteryId
				}			
			}		
			lotteryId
		}
	}
`
export const UPDATE_ONE_EDITION = gql`
	mutation (
		$where:EditionWhereUniqueInput!
		$data:EditionUpdateInput!
	){
		updateOneEdition(
			where: $where
			data: $data
		){
			id
			createdAt
			updatedAt
			number
			name
			tickets{
				id
				createdAt
				updatedAt
				number
				code
				edition{
					id
					createdAt
					updatedAt
					number
					name
					lotteryId
				}			
				editionId
				user{
					id
					createdAt
					updatedAt
					name
					phone
				}			
				userId
			}		
			lottery{
				id
				createdAt
				deadline
				updatedAt
				name
				description
				editions{
					id
					createdAt
					updatedAt
					number
					name
					lotteryId
				}			
			}		
			lotteryId
		}
	}
`
export const DELETE_ONE_EDITION = gql`
	mutation (
		$where:EditionWhereUniqueInput!
	){
		deleteOneEdition(
			where: $where
		){
			id
			createdAt
			updatedAt
			number
			name
			tickets{
				id
				createdAt
				updatedAt
				number
				code
				edition{
					id
					createdAt
					updatedAt
					number
					name
					lotteryId
				}			
				editionId
				user{
					id
					createdAt
					updatedAt
					name
					phone
				}			
				userId
			}		
			lottery{
				id
				createdAt
				deadline
				updatedAt
				name
				description
				editions{
					id
					createdAt
					updatedAt
					number
					name
					lotteryId
				}			
			}		
			lotteryId
		}
	}
`
export const CREATE_MANY_TICKET = gql`
	mutation (
		$where:EditionWhereUniqueInput!
		$data:TicketManyCreateInput!
	){
		createManyTicket(
			where: $where
			data: $data
		)
	}
`
export const UPDATE_ONE_TICKET = gql`
	mutation (
		$where:TicketWhereUniqueInput!
		$data:TicketUpdateInput!
	){
		updateOneTicket(
			where: $where
			data: $data
		){
			id
			createdAt
			updatedAt
			number
			code
			edition{
				id
				createdAt
				updatedAt
				number
				name
				tickets{
					id
					createdAt
					updatedAt
					number
					code
					editionId
					userId
				}			
				lottery{
					id
					createdAt
					deadline
					updatedAt
					name
					description
				}			
				lotteryId
			}		
			editionId
			user{
				id
				createdAt
				updatedAt
				name
				phone
				tickets{
					id
					createdAt
					updatedAt
					number
					code
					editionId
					userId
				}			
			}		
			userId
		}
	}
`
export const DELETE_ONE_TICKET = gql`
	mutation (
		$where:TicketWhereUniqueInput!
	){
		deleteOneTicket(
			where: $where
		){
			id
			createdAt
			updatedAt
			number
			code
			edition{
				id
				createdAt
				updatedAt
				number
				name
				tickets{
					id
					createdAt
					updatedAt
					number
					code
					editionId
					userId
				}			
				lottery{
					id
					createdAt
					deadline
					updatedAt
					name
					description
				}			
				lotteryId
			}		
			editionId
			user{
				id
				createdAt
				updatedAt
				name
				phone
				tickets{
					id
					createdAt
					updatedAt
					number
					code
					editionId
					userId
				}			
			}		
			userId
		}
	}
`
export const CREATE_ONE_NEWS = gql`
	mutation (
		$data:NewsCreateInput!
	){
		createOneNews(
			data: $data
		){
			id
			createdAt
			updatedAt
			name
			content
		}
	}
`
export const UPDATE_ONE_NEWS = gql`
	mutation (
		$where:NewsWhereUniqueInput!
		$data:NewsUpdateInput!
	){
		updateOneNews(
			where: $where
			data: $data
		){
			id
			createdAt
			updatedAt
			name
			content
		}
	}
`
export const DELETE_ONE_NEWS = gql`
	mutation (
		$where:NewsWhereUniqueInput!
	){
		deleteOneNews(
			where: $where
		){
			id
			createdAt
			updatedAt
			name
			content
		}
	}
`
export const CREATE_ONE_PARTNER = gql`
	mutation (
		$data:PartnerCreateInput!
	){
		createOnePartner(
			data: $data
		){
			id
			createdAt
			updatedAt
			name
			description
			logo
			url
		}
	}
`
export const UPDATE_ONE_PARTNER = gql`
	mutation (
		$where:PartnerWhereUniqueInput!
		$data:PartnerUpdateInput!
	){
		updateOnePartner(
			where: $where
			data: $data
		){
			id
			createdAt
			updatedAt
			name
			description
			logo
			url
		}
	}
`
export const DELETE_ONE_PARTNER = gql`
	mutation (
		$where:PartnerWhereUniqueInput!
	){
		deleteOnePartner(
			where: $where
		){
			id
			createdAt
			updatedAt
			name
			description
			logo
			url
		}
	}
`
export const DELETE_IMAGES = gql`
	mutation (
		$data:DeleteImageInput!
	){
		deleteImages(
			data: $data
		)
	}
`
export const UPLOAD_IMAGES = gql`
	mutation (
		$data:UploadImageInput!
	){
		uploadImages(
			data: $data
		)
	}
`
