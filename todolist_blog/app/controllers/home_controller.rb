class HomeController < ApplicationController
  skip_before_action :authorize
  def index
    @cards = Card.order(:created_at).reverse_order
  end
end
