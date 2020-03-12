import vuexStore from "/app/config/vuex.js";
import { UsersListDef } from "/app/modules/core/components/users-list/users-list.js";

const _UsersListView = async (res, rej) => {
  const tpl = await RawCMS.loadComponentTpl(
    "/app/modules/core/views/users-list-view/users-list-view.tpl.html"
  );
  const list = await UsersListDef();

  res({
    components: {
      UsersList: list
    },
    mounted() {
      vuexStore.dispatch("core/updateTopBarTitle", this.$t("core.users.title"));
    },
    methods: {
      goToCreateView: function() {
        this.$router.push({ name: "user-details", params: { id: "new" } });
      }
    },
    template: tpl
  });
};

export const UsersListView = _UsersListView;
export default _UsersListView;
