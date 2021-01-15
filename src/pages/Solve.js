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
import { makeStyles, withStyles } from "@material-ui/core/styles";

import ex2 from "../image/electro.png";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import withRoot from "../withRoot";

import AppAppBar from "../views/AppAppBar";
import AppFooter from "../views/AppFooter";
import SignIn from "./SignIn.js";
import produce from "immer";

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

  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();
  const [selectedOrderIndex, setSelectedOrderIndex] = React.useState(0);
  const [selectedProblemIndex, setSelectedProblemIndex] = React.useState(0);
  const [orders, setOrders] = useState([]);
  const [problems, setProblems] = useState([]);
  const [viewSol, setViewSol] = useState(false);

  const handleListItemClick = (event, index) => {
    console.log("현재 click한 index", index);
    setSelectedOrderIndex(index);
    setSelectedProblemIndex(0);
    setProblems([]);
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
    getProblem(orders).catch((err) => console.log(err));
  }, [selectedOrderIndex, selectedProblemIndex]);

  React.useLayoutEffect(() => {
    console.log(problems);
  }, [problems]);

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
  }

  // 34895469-cf78-48fd-b353-ace169b02276 // let calculus mentor
  async function fetchOrders() {
    console.log("fetch assigned orders");
    const username = await nowAuth().catch((err) => console.log(err));
    const FetchAssignedOrders = `query MyQuery($eq: String = "${username}") {
      listOrders(filter: {solvername: {eq: $eq}}) {
        items {
          deadline
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
      problem.image = image;
    }
    console.log(problem);
    setProblems(
      produce(problems, (draft) => {
        draft[selectedProblemIndex] = problem;
      })
    );
  }

  function getLastProblem() {
    setSelectedProblemIndex(selectedProblemIndex-1)
  }

  function getNextProblem() {
    setSelectedProblemIndex(selectedProblemIndex+1)
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
                <button onClick={handleViewSol}>
                  {viewSol === true ? (
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
              문제 selectedOrderIndex: {selectedOrderIndex},
              selectedProblemIndex: {selectedProblemIndex}
              {problems[selectedProblemIndex] && (
                <img
                  src={problems[selectedProblemIndex].image}
                  style={{ width: 400 }}
                  alt="문제 사진이 없습니다."
                />
              )}
              {/* {problems[selectedProblemIndex].description} */}
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
                    disabled={!orders[selectedOrderIndex].problems.items[selectedProblemIndex-1]}
                    variant="outlined"
                    color="black"
                    onClick={getLastProblem}
                  >
                    이전문제
                  </Button>
                  남은시간 02:13 ____ {selectedProblemIndex+1}/{orders[selectedOrderIndex].problems.items.length}
                  <Button
                    disabled={!orders[selectedOrderIndex].problems.items[selectedProblemIndex+1]}
                    variant="outlined"
                    color="black"
                    onClick={getNextProblem}
                  >
                    다음문제
                  </Button>
                  <Grid direction="column" alignItems="center">
                    <Button variant="outlined">풀이보기</Button>
                    <Button variant="outlined">검토요청</Button>
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
