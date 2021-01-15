/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createProblem = /* GraphQL */ `
  mutation CreateProblem(
    $input: CreateProblemInput!
    $condition: ModelProblemConditionInput
  ) {
    createProblem(input: $input, condition: $condition) {
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
export const updateProblem = /* GraphQL */ `
  mutation UpdateProblem(
    $input: UpdateProblemInput!
    $condition: ModelProblemConditionInput
  ) {
    updateProblem(input: $input, condition: $condition) {
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
export const deleteProblem = /* GraphQL */ `
  mutation DeleteProblem(
    $input: DeleteProblemInput!
    $condition: ModelProblemConditionInput
  ) {
    deleteProblem(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      channelID
      author
      body
      createdAt
      updatedAt
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
      author
      body
      createdAt
      updatedAt
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
      author
      body
      createdAt
      updatedAt
    }
  }
`;
