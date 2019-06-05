import $ from 'jquery';

//Show global loading
export function showLoading() {
    $('.wrap-loader').show();
}

//Hide global loading
export function hideLoading() {
    $('.wrap-loader').delay(700).hide(0);
}