import "./Solve.css";
import React, { useState, useEffect } from "react";
import { API, Storage, Amplify, Auth, graphqlOperation } from "aws-amplify";
import {
  AmplifyAuthenticator,
  AmplifySignOut,
  AmplifySignIn,
  AmplifySignUp,
} from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import awsconfig from "../aws-exports";
import { listProblems } from "../graphql/queries";

import Typography from "../components/Typography";
import {
  Grid,
  Button,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  Container,
  Paper,
  IconButton,
  InputBase,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import HelpIcon from "@material-ui/icons/Help";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import ex2 from "../image/electro.png";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import withRoot from "../withRoot";

import AppAppBar from "../views/AppAppBar";
import AppFooter from "../views/AppFooter";
import SignIn from "./SignIn.js";
import produce from "immer";
import moment from "moment";

import { createAnswer as createAnswerMutation } from "../graphql/mutations";

Amplify.configure(awsconfig);

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary,
    alignItems: "center",
    position: "relative",
  },
  form: {
    marginTop: theme.spacing(6),
  },
  number: {
    fontSize: 30,
    color: theme.palette.secondary.light,
    marginLeft: theme.spacing(2),
  },
  content: {
    fontSize: 24,
    marginLeft: theme.spacing(1),
  },
  inputbox: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
  },
  popbox: {
    fontSize: 14,
    backgroundColor: "#F3F3F3",
    padding: theme.spacing(2),
  },
  searchbar: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 742,
    marginTop: theme.spacing(5),
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  inputbox: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
  },
  plusbutton: {
    marginBottom: theme.spacing(1.6),
  },
  iconButton: {
    padding: 10,
  },
  method: {
    textAlign: "center",
  },
  red: {
    color: "red",
    fontSize: 15,
  },
  table: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    width: "90%",
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const Solve = () => {
  const classes = useStyles();

  const initialSolutionForm = {
    description: "",
    image: "",
  };

  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();
  const [selectedOrderIndex, setSelectedOrderIndex] = React.useState(0);
  const [selectedProblemIndex, setSelectedProblemIndex] = React.useState(0);
  const [orders, setOrders] = useState([]);
  const [problems, setProblems] = useState([]);
  const [solutionForm, setSolutionForm] = useState([initialSolutionForm]);
  const [viewRefSol, setViewRefSol] = useState(false);
  const [viewSol, setViewSol] = useState(false);

  console.log(typeof solutionForm);
  const handleListItemClick = (event, index) => {
    console.log("현재 click한 index", index);
    setSelectedOrderIndex(index);
    setSelectedProblemIndex(0);
    setViewSol(false);
    setProblems([]);
    setSolutionForm([initialSolutionForm])
    // for (let i = 0; i < orders[selectedOrderIndex].problems.items.length; i++) {
    //   problems.push(initialSolutionForm)
    // }
  };

  const handleViewRefSol = () => {
    setViewRefSol(!viewRefSol);
  };

  const handleViewSol = () => {
    setViewSol(!viewSol);
  };

  React.useLayoutEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(
        (data) => console.log(data) & setUser(data) & setAuthState("signedin")
      )
      .catch((err) => console.log(err));
    // onAuthUIStateChange((nextAuthState, authData) => {
    //   setAuthState(nextAuthState);
    //   setUser(authData);
    // });
  }, []);

  React.useLayoutEffect(() => {
    fetchFirst();
  }, [authState]);

  React.useLayoutEffect(() => {
    console.log(solutionForm);
  }, [solutionForm]);

  React.useLayoutEffect(() => {
    getProblem(orders).catch((err) => console.log(err));
  }, [selectedOrderIndex, selectedProblemIndex]);

  async function nowAuth() {
    const nowAuth = await Auth.currentUserInfo();
    const username = nowAuth.username;
    return username;
  }

  async function fetchFirst() {
    const ordersFromAPI = await fetchOrders().catch((error) => {
      console.log(error);
    });
    await getProblem(ordersFromAPI).catch((error) => {
      console.log(error);
    });
    // for (let i = 0; i < ordersFromAPI[selectedOrderIndex].problems.items.length; i++) {
    //   problems.push(initialSolutionForm)
    // }
  }

  // 34895469-cf78-48fd-b353-ace169b02276 // let calculus mentor
  async function fetchOrders() {
    console.log("fetch assigned orders");
    const username = await nowAuth().catch((err) => console.log(err));
    const FetchAssignedOrders = `query MyQuery($eq: String = "${username}") {
      listOrders(filter: {state: {eq: solveWaiting}, solvername: {eq: $eq}}) {
        items {
          id
          deadline
          state
          problems {
            items {
              id
            }
          }
        }
      }
    }`;

    const apiData = await API.graphql(graphqlOperation(FetchAssignedOrders));
    const ordersFromAPI = apiData.data.listOrders.items;
    console.log("API로 받은 orders", ordersFromAPI);
    setOrders(ordersFromAPI);
    return ordersFromAPI;
  }

  async function getProblem(orders) {
    if (problems[selectedProblemIndex]) return;
    if (!solutionForm[selectedProblemIndex]) {
      solutionForm.push(initialSolutionForm);
    }
    console.log("함수에서 받은 index", selectedOrderIndex);
    console.log(
      orders[selectedOrderIndex].problems.items[selectedProblemIndex].id
    );
    const GetProblem = `query GetProblem($id: ID = "${orders[selectedOrderIndex].problems.items[selectedProblemIndex].id}") {
      getProblem(id: $id) {
        description
        image
      }
    }`;
    const apiData = await API.graphql(graphqlOperation(GetProblem));
    const problem = apiData.data.getProblem;
    if (problem.image) {
      const image = await Storage.get(problem.image);
      problem.image_url = image;
    }
    console.log(problem);
    setProblems(
      produce(problems, (draft) => {
        draft[selectedProblemIndex] = problem;
      })
    );
  }

  function getLastProblem() {
    setSelectedProblemIndex(selectedProblemIndex - 1);
  }

  function getNextProblem() {
    setSelectedProblemIndex(selectedProblemIndex + 1);
  }

  /**
   * Answer 만들고, s3에 사진 저장, order의 state를 mentoring 상태로 만들기
   * 추후에 mentoring만도 따로 불러와야 함
   */
  async function createAnswer() {
    for (var i = 0; i < solutionForm.length; i++) {
      try {
        const data = await API.graphql({
          query: createAnswerMutation,
          variables: {
            input: {
              image: "sol_" + problems[i].image,
              description: solutionForm[i].description,
              answerProblemId: orders[selectedOrderIndex].problems.items[i].id,
            },
          },
        });

        try {
          const res = await Storage.put(
            "sol_" + problems[i].image,
            solutionForm[i].image
          ); //S3 버킷에 파일 저장
          console.log(res);
        } catch (e) {
          console.log("graphql error occurred. error message : ", e);
        }

        console.log("create Answer successfully", i, "번째");
        console.log(data);
      } catch (e) {
        console.log("graphql error occurred. error message : ", e);
      }
    }
    const ChangeOrderState = `mutation ChangeOrderState($id: ID = "${orders[selectedOrderIndex].id}") {
      updateOrder(input: {id: $id, state: mentoring}) {
        updatedAt
        state
      }
    }`;
    try {
      const res = await API.graphql(graphqlOperation(ChangeOrderState));
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }
  // enum State {
  //   payWaiting # 결제대기
  //   priceWaiting #금액책정대기
  //   canceledWaiting # 풀이취소대기
  //   canceled # 풀이취소
  //   assignWaiting # 풀이자배정대기
  //   solveWaiting # 문제풀이대기
  //   solving # 문제풀이중
  //   mentoring # 멘토링중
  //   finished # 완료
  // }

  if (orders.length === 0) return <div>There isn't problem.</div>;
  if (problems.length === 0) return <div>IMAGE LOADING...</div>;
  return authState === AuthState.SignedIn && user ? (
    <div className="Solve">
      <React.Fragment>
        <AppAppBar isLogin={authState} />
        <div>{orders[0].subject}</div>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          <Grid>
            <React.Fragment>
              <Box
                border={0}
                style={{ margin: "0em 0em 0em 0em", padding: "0em 0em" }}
              >
                <Table
                  border="1px solid gray"
                  align="center"
                  className={classes.table}
                  aria-label="simple table"
                >
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="center">번호</StyledTableCell>
                      <StyledTableCell align="center">마감시간</StyledTableCell>
                      <StyledTableCell align="center">
                        남은 문제수
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {orders.map((order, index) => (
                      <TableRow key={order.deadline}>
                        <StyledTableCell
                          align="center"
                          component="th"
                          scope="row"
                        >
                          <ListItem
                            button
                            selected={selectedOrderIndex === index}
                            onClick={(event) =>
                              handleListItemClick(event, index)
                            }
                          >
                            {index + 1}
                          </ListItem>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <ListItem
                            button
                            selected={selectedOrderIndex === index}
                            onClick={(event) =>
                              handleListItemClick(event, index)
                            }
                          >
                            {order.deadline}
                          </ListItem>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <ListItem
                            button
                            selected={selectedOrderIndex === index}
                            onClick={(event) =>
                              handleListItemClick(event, index)
                            }
                          >
                            {order.problems.items.length}
                          </ListItem>
                        </StyledTableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </React.Fragment>
            <React.Fragment>
              <Box
                border={1}
                style={{ margin: "1em 1em 1em", padding: "1em 2em" }}
              >
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                (치팅시트 들어올 자리)
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <button onClick={handleViewRefSol}>
                  {viewRefSol === true ? (
                    <span>문제보기</span>
                  ) : (
                    <span>풀이보기</span>
                  )}
                </button>
              </Box>
            </React.Fragment>
            <React.Fragment>
              <Box
                border={1}
                style={{
                  maxHeight: "120",
                  margin: "1em 1em 1em",
                  padding: "1em 2em",
                }}
              >
                <Typography variant="body1" align="center">
                  <br />
                  <br />
                  멘토 재배정 요청 : 사유
                  <br />
                  <br />
                </Typography>
              </Box>
            </React.Fragment>
          </Grid>
          <Grid item xs={6}>
            <Box
              border={1}
              style={{
                minHeight: "60",
                maxHeight: "120",
                margin: "1em 1em 1em",
                padding: "1em 2em",
              }}
            >
              {viewSol === false ? (
                <div>
                  <div>
                    문제 selectedOrderIndex: {selectedOrderIndex},
                    selectedProblemIndex: {selectedProblemIndex}
                  </div>
                  {problems[selectedProblemIndex] && (
                    <img
                      src={problems[selectedProblemIndex].image_url}
                      style={{ width: 400 }}
                      alt="문제 사진이 없습니다."
                    />
                  )}
                  <hr />
                  {problems[selectedProblemIndex] && (
                    <div>{problems[selectedProblemIndex].description}</div>
                  )}
                </div>
              ) : (
                solutionForm.map((sol, index) =>
                  index === selectedProblemIndex ? (
                    <div>
                      <div>
                        답변 selectedOrderIndex: {selectedOrderIndex},
                        selectedProblemIndex: {selectedProblemIndex}
                      </div>
                      <Container
                        className={classes.container}
                        style={{ padding: "10em" }}
                      >
                        <Grid
                          container
                          spacing={10}
                          justify="center"
                          direction="column"
                        >
                          <Grid item xs={5}>
                            {solutionForm[selectedProblemIndex] && (
                              <div>{solutionForm[selectedProblemIndex].image.name}</div>
                            )}
                            <input
                              id="contained-button-file"
                              className={classes.inputbox}
                              type="file"
                              onChange={(e) =>
                                setSolutionForm(
                                  produce(solutionForm, (draft) => {
                                    draft[selectedProblemIndex].image =
                                      e.target.files[0];
                                  })
                                )
                              }
                            />
                            <Typography
                              variant="h4"
                              display="inline"
                              className={classes.inputword}
                            >
                              사진
                            </Typography>
                            <label htmlFor="contained-button-file">
                              <IconButton
                                className={classes.plusbutton}
                                variant="contained"
                                color="primary"
                                component="span"
                              >
                                <AddCircleIcon fontSize="large" />
                              </IconButton>
                            </label>
                          </Grid>
                          <Divider orientation="horizontal" flexItem />
                          <Grid item xs={5}>
                            <div>
                              {solutionForm[selectedProblemIndex] && (
                                <div>{solutionForm[selectedProblemIndex].description}</div>
                              )}
                              <input
                                type="text"
                                onChange={(e) =>
                                  setSolutionForm(
                                    produce(solutionForm, (draft) => {
                                      draft[selectedProblemIndex].description =
                                        e.target.value;
                                    })
                                  )
                                }
                              />
                            </div>
                            <Typography
                              variant="h4"
                              display="inline"
                              className={classes.inputword}
                            >
                              텍스트
                            </Typography>
                            <IconButton
                              className={classes.plusbutton}
                              variant="contained"
                              color="primary"
                              component="span"
                            >
                              <AddCircleIcon fontSize="large" />
                            </IconButton>
                          </Grid>
                        </Grid>
                      </Container>
                    </div>
                  ) : null
                )
              )}
            </Box>
            <React.Fragment>
              <Box
                border={1}
                style={{
                  maxHeight: "120",
                  margin: "1em 1em 1em",
                  padding: "1em 2em",
                }}
              >
                <Typography variant="h4" align="center">
                  <Button
                    disabled={
                      !orders[selectedOrderIndex].problems.items[
                        selectedProblemIndex - 1
                      ]
                    }
                    variant="outlined"
                    color="black"
                    onClick={getLastProblem}
                  >
                    이전문제
                  </Button>
                  남은시간 02:13 ____ {selectedProblemIndex + 1}/
                  {orders[selectedOrderIndex].problems.items.length}
                  <Button
                    disabled={
                      !orders[selectedOrderIndex].problems.items[
                        selectedProblemIndex + 1
                      ]
                    }
                    variant="outlined"
                    color="black"
                    onClick={getNextProblem}
                  >
                    다음문제
                  </Button>
                  <Grid direction="column" alignItems="center">
                    <Button variant="outlined" onClick={handleViewSol}>
                      {viewSol === true ? (
                        <span>문제보기</span>
                      ) : (
                        <span>풀이보기</span>
                      )}
                    </Button>
                    <Button variant="outlined" onClick={createAnswer}>
                      풀이 보내기
                    </Button>
                  </Grid>
                </Typography>
              </Box>
            </React.Fragment>
          </Grid>
          <Grid item xs={3}>
            <React.Fragment>
              <Box
                border={1}
                style={{
                  maxHeight: "120",
                  margin: "1em 1em 1em",
                  padding: "0em 2em",
                }}
              >
                <Typography variant="h6" align="left">
                  <br />
                  사용자 : 왜 ....인가요?
                  <br />
                  <br />
                </Typography>
                <Typography variant="h6" align="right">
                  멘토 : ......입니다
                  <br />
                  <br />
                </Typography>
                <Typography variant="h6" align="left">
                  사용자 : [사진] <br />
                  <br />
                  사용자 : 이건가요?
                  <br />
                  <br />
                </Typography>
                <Typography variant="h6" align="right">
                  멘토 : 네 맞아요!
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </Typography>
                <Divider />
                <Grid alignItems="flex-end">
                  <Button variant="outlined">+수식</Button>
                  ----------------[채팅입력]----------------
                  <Button variant="outlined">[전송]</Button>
                </Grid>
              </Box>
            </React.Fragment>
            <React.Fragment>
              <Box
                border={1}
                style={{
                  maxHeight: "120",
                  margin: "1em 1em 1em",
                  padding: "1em 2em",
                }}
              >
                <br />
                <Typography variant="h6" align="center">
                  풀이중 <ArrowForwardIosOutlinedIcon /> 풀이완료/멘토링{" "}
                  <ArrowForwardIosOutlinedIcon /> 종료
                </Typography>
                <br />
                <br />
              </Box>
            </React.Fragment>
          </Grid>
        </Grid>
        <AppFooter />
      </React.Fragment>
    </div>
  ) : (
    <SignIn />
  );
};

export default withRoot(Solve);
