/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
        deadline
        state
        pay
        createdAt
        solver
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      subject
      option1
      option2
      option3
      username
      deadline
      state
      pay
      message {
        id
        channelID
        client
        solver
        author
        body
        createdAt
        updatedAt
        owner
      }
      createdAt
      solver
      updatedAt
      owner
      problems {
        nextToken
      }
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
        deadline
        state
        pay
        createdAt
        solver
        updatedAt
        owner
      }
      nextToken
      total
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
      order
      createdAt
      updatedAt
      owner
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
        order
        createdAt
        updatedAt
        owner
      }
      nextToken
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
        order
        createdAt
        updatedAt
        owner
      }
      nextToken
      total
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
export const getProblem = /* GraphQL */ `
  query GetProblem($id: ID!) {
    getProblem(id: $id) {
      id
      subject
      image
      description
      createdAt
      updatedAt
      order {
        id
        subject
        option1
        option2
        option3
        username
        deadline
        state
        pay
        createdAt
        solver
        updatedAt
        owner
      }
      owner
      answers {
        nextToken
      }
    }
  }
`;
export const getAnswer = /* GraphQL */ `
  query GetAnswer($id: ID!) {
    getAnswer(id: $id) {
      id
      image
      description
      client
      solver
      createdAt
      updatedAt
      problem {
        id
        subject
        image
        description
        createdAt
        updatedAt
        owner
      }
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
        client
        solver
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSolver = /* GraphQL */ `
  query GetSolver($id: ID!) {
    getSolver(id: $id) {
      id
      solver
      state
      Orders
      createdAt
      updatedAt
    }
  }
`;
export const listSolvers = /* GraphQL */ `
  query ListSolvers(
    $filter: ModelSolverFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSolvers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        solver
        state
        Orders
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const solverBySolverName = /* GraphQL */ `
  query SolverBySolverName(
    $solver: String
    $state: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSolverFilterInput
    $limit: Int
    $nextToken: String
  ) {
    solverBySolverName(
      solver: $solver
      state: $state
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        solver
        state
        Orders
        createdAt
        updatedAt
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
      client
      solver
      author
      body
      createdAt
      updatedAt
      owner
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
        client
        solver
        author
        body
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
    $channelID: String
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
        client
        solver
        author
        body
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
