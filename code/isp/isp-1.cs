interface IAnotherThing
{
  string What { get; set; }
  string Ever { get; set; }
}

interface IDoSomething 
{
  void DoIt();

  IAnotherThing DoItWithStyle();
}

class ThatThing: IAnotherThing 
{
  public string What { get; set; }
  public string Ever { get; set; }
}

class DoSomething: IDoSomething
{
  public void DoIt()
  {
    // do some stuff
  }

  public IAnotherThing DoItWithStyle()
  {
    return new ThatThing();
  }
}
