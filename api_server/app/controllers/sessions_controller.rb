class SessionsController < Devise::SessionsController

  respond_to :json

  def create
    render :json => current_user.to_json()
  end

end
