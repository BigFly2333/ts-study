class X {
  public test(){return this.getString();}
  private getString(){return "x";}
}

class Y extends X {
  public getString(){return "y";}
}
