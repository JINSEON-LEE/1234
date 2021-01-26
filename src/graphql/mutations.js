/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      username
      subject
      option1
      option2
      option3
      deadline
      state
      pay
      problems {
        nextToken
      }
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
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      username
      subject
      option1
      option2
      option3
      deadline
      state
      pay
      problems {
        nextToken
      }
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
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      username
      subject
      option1
      option2
      option3
      deadline
      state
      pay
      problems {
        nextToken
      }
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
    }
  }
`;
export const createReview = /* GraphQL */ `
  mutation CreateReview(
    $input: CreateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    createReview(input: $input, condition: $condition) {
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
export const updateReview = /* GraphQL */ `
  mutation UpdateReview(
    $input: UpdateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    updateReview(input: $input, condition: $condition) {
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
export const deleteReview = /* GraphQL */ `
  mutation DeleteReview(
    $input: DeleteReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    deleteReview(input: $input, condition: $condition) {
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
export const createProblem = /* GraphQL */ `
  mutation CreateProblem(
    $input: CreateProblemInput!
    $condition: ModelProblemConditionInput
  ) {
    createProblem(input: $input, condition: $condition) {
      id
      index
      subject
      image
      description
      orderID
      answers {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateProblem = /* GraphQL */ `
  mutation UpdateProblem(
    $input: UpdateProblemInput!
    $condition: ModelProblemConditionInput
  ) {
    updateProblem(input: $input, condition: $condition) {
      id
      index
      subject
      image
      description
      orderID
      answers {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteProblem = /* GraphQL */ `
  mutation DeleteProblem(
    $input: DeleteProblemInput!
    $condition: ModelProblemConditionInput
  ) {
    deleteProblem(input: $input, condition: $condition) {
      id
      index
      subject
      image
      description
      orderID
      answers {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createAnswer = /* GraphQL */ `
  mutation CreateAnswer(
    $input: CreateAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    createAnswer(input: $input, condition: $condition) {
      id
      image
      description
      problem {
        id
        index
        subject
        image
        description
        orderID
        createdAt
        updatedAt
        owner
      }
      client
      createdAt
      updatedAt
    }
  }
`;
export const updateAnswer = /* GraphQL */ `
  mutation UpdateAnswer(
    $input: UpdateAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    updateAnswer(input: $input, condition: $condition) {
      id
      image
      description
      problem {
        id
        index
        subject
        image
        description
        orderID
        createdAt
        updatedAt
        owner
      }
      client
      createdAt
      updatedAt
    }
  }
`;
export const deleteAnswer = /* GraphQL */ `
  mutation DeleteAnswer(
    $input: DeleteAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    deleteAnswer(input: $input, condition: $condition) {
      id
      image
      description
      problem {
        id
        index
        subject
        image
        description
        orderID
        createdAt
        updatedAt
        owner
      }
      client
      createdAt
      updatedAt
    }
  }
`;
export const createSolver = /* GraphQL */ `
  mutation CreateSolver(
    $input: CreateSolverInput!
    $condition: ModelSolverConditionInput
  ) {
    createSolver(input: $input, condition: $condition) {
      id
      solver
      state
      orders
      createdAt
      updatedAt
    }
  }
`;
export const updateSolver = /* GraphQL */ `
  mutation UpdateSolver(
    $input: UpdateSolverInput!
    $condition: ModelSolverConditionInput
  ) {
    updateSolver(input: $input, condition: $condition) {
      id
      solver
      state
      orders
      createdAt
      updatedAt
    }
  }
`;
export const deleteSolver = /* GraphQL */ `
  mutation DeleteSolver(
    $input: DeleteSolverInput!
    $condition: ModelSolverConditionInput
  ) {
    deleteSolver(input: $input, condition: $condition) {
      id
      solver
      state
      orders
      createdAt
      updatedAt
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
export const createChangerequest = /* GraphQL */ `
  mutation CreateChangerequest(
    $input: CreateChangerequestInput!
    $condition: ModelChangerequestConditionInput
  ) {
    createChangerequest(input: $input, condition: $condition) {
      id
      orderId
      requestedState
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateChangerequest = /* GraphQL */ `
  mutation UpdateChangerequest(
    $input: UpdateChangerequestInput!
    $condition: ModelChangerequestConditionInput
  ) {
    updateChangerequest(input: $input, condition: $condition) {
      id
      orderId
      requestedState
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteChangerequest = /* GraphQL */ `
  mutation DeleteChangerequest(
    $input: DeleteChangerequestInput!
    $condition: ModelChangerequestConditionInput
  ) {
    deleteChangerequest(input: $input, condition: $condition) {
      id
      orderId
      requestedState
      createdAt
      updatedAt
      owner
    }
  }
`;
