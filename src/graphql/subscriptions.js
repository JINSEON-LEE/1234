/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($owner: String) {
    onCreateOrder(owner: $owner) {
      id
      username
      subject
      option1
      option2
      option3
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($owner: String) {
    onUpdateOrder(owner: $owner) {
      id
      username
      subject
      option1
      option2
      option3
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($owner: String) {
    onDeleteOrder(owner: $owner) {
      id
      username
      subject
      option1
      option2
      option3
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
export const onCreateReview = /* GraphQL */ `
  subscription OnCreateReview {
    onCreateReview {
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
export const onUpdateReview = /* GraphQL */ `
  subscription OnUpdateReview {
    onUpdateReview {
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
export const onDeleteReview = /* GraphQL */ `
  subscription OnDeleteReview {
    onDeleteReview {
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
export const onCreateProblem = /* GraphQL */ `
  subscription OnCreateProblem($owner: String) {
    onCreateProblem(owner: $owner) {
      id
      subject
      image
      description
      createdAt
      updatedAt
      order {
        id
        username
        subject
        option1
        option2
        option3
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
export const onUpdateProblem = /* GraphQL */ `
  subscription OnUpdateProblem($owner: String) {
    onUpdateProblem(owner: $owner) {
      id
      subject
      image
      description
      createdAt
      updatedAt
      order {
        id
        username
        subject
        option1
        option2
        option3
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
export const onDeleteProblem = /* GraphQL */ `
  subscription OnDeleteProblem($owner: String) {
    onDeleteProblem(owner: $owner) {
      id
      subject
      image
      description
      createdAt
      updatedAt
      order {
        id
        username
        subject
        option1
        option2
        option3
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
export const onCreateAnswer = /* GraphQL */ `
  subscription OnCreateAnswer($client: String) {
    onCreateAnswer(client: $client) {
      id
      image
      description
      client
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
export const onUpdateAnswer = /* GraphQL */ `
  subscription OnUpdateAnswer($client: String) {
    onUpdateAnswer(client: $client) {
      id
      image
      description
      client
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
export const onDeleteAnswer = /* GraphQL */ `
  subscription OnDeleteAnswer($client: String) {
    onDeleteAnswer(client: $client) {
      id
      image
      description
      client
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
export const onCreateSolver = /* GraphQL */ `
  subscription OnCreateSolver($solver: String) {
    onCreateSolver(solver: $solver) {
      id
      solver
      state
      Orders
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSolver = /* GraphQL */ `
  subscription OnUpdateSolver($solver: String) {
    onUpdateSolver(solver: $solver) {
      id
      solver
      state
      Orders
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSolver = /* GraphQL */ `
  subscription OnDeleteSolver($solver: String) {
    onDeleteSolver(solver: $solver) {
      id
      solver
      state
      Orders
      createdAt
      updatedAt
    }
  }
`;
