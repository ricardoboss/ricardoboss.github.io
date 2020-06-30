import Vue from 'vue';
import numeral from 'numeral';
import numFormat from 'vue-filter-number-format';

Vue.filter('nf', numFormat(numeral));
