/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      subject
      option1
      option2
      option3
      username
      solvername
      deadline
      state
      pay
      review {
        id
        username
        subject
        rating
        review
        createdAt
        updatedAt
      }
      problems {
        nextToken
      }
      message {
        id
        channelID
        author
        body
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        subject
        option1
        option2
        option3
        username
        solvername
        deadline
        state
        pay
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getReview = /* GraphQL */ `
  query GetReview($id: ID!) {
    getReview(id: $id) {
      id
      username
      subject
      rating
      review
      order {
        id
        subject
        option1
        option2
        option3
        username
        solvername
        deadline
        state
        pay
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
export const listReviews = /* GraphQL */ `
  query ListReviews(
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        subject
        rating
        review
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProblem = /* GraphQL */ `
  query GetProblem($id: ID!) {
    getProblem(id: $id) {
      id
      subject
      image
      description
      order {
        id
        subject
        option1
        option2
        option3
        username
        solvername
        deadline
        state
        pay
        createdAt
        updatedAt
        owner
      }
      answers {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listProblems = /* GraphQL */ `
  query ListProblems(
    $filter: ModelProblemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProblems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        subject
        image
        description
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getAnswer = /* GraphQL */ `
  query GetAnswer($id: ID!) {
    getAnswer(id: $id) {
      id
      image
      description
      problem {
        id
        subject
        image
        description
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listAnswers = /* GraphQL */ `
  query ListAnswers(
    $filter: ModelAnswerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnswers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        image
        description
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      channelID
      author
      body
      createdAt
      updatedAt
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        channelID
        author
        body
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const recordsByDateCreated = /* GraphQL */ `
  query RecordsByDateCreated(
    $state: State
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    RecordsByDateCreated(
      state: $state
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        subject
        option1
        option2
        option3
        username
        solvername
        deadline
        state
        pay
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const messagesByChannelId = /* GraphQL */ `
  query MessagesByChannelId(
    $channelID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByChannelID(
      channelID: $channelID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        channelID
        author
        body
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchOrders = /* GraphQL */ `
  query SearchOrders(
    $filter: SearchableOrderFilterInput
    $sort: SearchableOrderSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchOrders(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        subject
        option1
        option2
        option3
        username
        solvername
        deadline
        state
        pay
        createdAt
        updatedAt
        owner
      }
      nextToken
      total
    }
  }
`;
export const searchReviews = /* GraphQL */ `
  query SearchReviews(
    $filter: SearchableReviewFilterInput
    $sort: SearchableReviewSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchReviews(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        username
        subject
        rating
        review
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
