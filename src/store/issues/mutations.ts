import { MutationTree } from 'vuex';
import { IssuesStateInterface } from './state';

const mutation: MutationTree<IssuesStateInterface> = {
  updateIssueList(state, { list, total }) {
    state.issueList = list;
    // 处理bg类型脚本
    state.total = total;
    state.preFetch = true;
  },
  resetPreFetch(state) {
    state.preFetch = false;
  }
};

export default mutation;
