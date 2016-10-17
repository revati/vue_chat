import Vue from 'vue'
import Resource from 'vue-resource'

Vue.use(Resource)

Vue.http.options.root = process.env.API_ROOT
Vue.http.headers.common['Access-Control-Allow-Origin'] = '*';
Vue.http.headers.common['Access-Control-Allow-Headers'] = 'Content-Type'