/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($owner: String!) {
    onCreateOrder(owner: $owner) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($owner: String!) {
    onUpdateOrder(owner: $owner) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($owner: String!) {
    onDeleteOrder(owner: $owner) {
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
export const onCreateReview = /* GraphQL */ `
  subscription OnCreateReview {
    onCreateReview {
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
export const onUpdateReview = /* GraphQL */ `
  subscription OnUpdateReview {
    onUpdateReview {
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
export const onDeleteReview = /* GraphQL */ `
  subscription OnDeleteReview {
    onDeleteReview {
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
export const onCreateProblem = /* GraphQL */ `
  subscription OnCreateProblem($owner: String!) {
    onCreateProblem(owner: $owner) {
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
export const onUpdateProblem = /* GraphQL */ `
  subscription OnUpdateProblem($owner: String!) {
    onUpdateProblem(owner: $owner) {
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
export const onDeleteProblem = /* GraphQL */ `
  subscription OnDeleteProblem($owner: String!) {
    onDeleteProblem(owner: $owner) {
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
export const onCreateAnswer = /* GraphQL */ `
  subscription OnCreateAnswer($owner: String!) {
    onCreateAnswer(owner: $owner) {
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
export const onUpdateAnswer = /* GraphQL */ `
  subscription OnUpdateAnswer($owner: String!) {
    onUpdateAnswer(owner: $owner) {
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
export const onDeleteAnswer = /* GraphQL */ `
  subscription OnDeleteAnswer($owner: String!) {
    onDeleteAnswer(owner: $owner) {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      id
      channelID
      author
      body
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
      id
      channelID
      author
      body
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
      id
      channelID
      author
      body
      createdAt
      updatedAt
    }
  }
`;
